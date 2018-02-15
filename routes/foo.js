const express = require('express');
const router = express.Router();

module.exports = function(db){
	// Middleware goes before the routing happens
	router.use(function(req, res, next){
		console.log('foo middleware');
		next();
	})

	router.route('/')
	.get(function(req, res){
		res.json([{bar: 1}, {bar: 2}]);
	})
	.post(function(req, res){
		res.json({message: 'foo created'});
	})

	router.route('/:bar')
	.get(function(req, res){
		res.json({bar: req.params.bar});
	})
	.put(function(req, res){
		res.json({message: 'foo updated'});
	})
	.delete(function(req, res){
		res.json({message: 'foo deleted'});
	})

	return router;
}
