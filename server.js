const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./db');
const routes = require('./routes');

// Server Setup

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4200;

// Initializing Database
db.connect(process.env.DB_ENDPOINT, function(err){
	if (err){
		console.log('Unable to connect to database.');
		process.exit(1);
	} else {
		console.log('Connected to database.');
	}
})

// Initializing Routes
routes.init(app);

// Start Server
app.listen(port);
console.log('Magic happens on port', port);