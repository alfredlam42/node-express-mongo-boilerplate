require('dotenv').config();

const db = require('./db');

// Initialize Database
db.connect(process.env.DB_ENDPOINT, function(err){
	if (err){
		console.log('Unable to connect to database.');
		process.exit(1);
	} else {
		console.log('Connected to database.');
		
		const express = require('express');
		const bodyParser = require('body-parser');

		const routes = require('./routes');

		// Server Setup
		const app = express();
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());

		const port = process.env.PORT || 4200;

		// Initializing Routes
		routes.init(app);

		// Start Server
		app.listen(port);
		console.log('Magic happens on port', port);
	}
})
