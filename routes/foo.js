const express = require('express');

const db = require('../db').get();

const router = express.Router();

// Middleware goes before the routing happens
router.use(function(req, res, next){
	console.log('foo middleware');
	next();
})

router.route('/')
.post(function(req, res){
	res.json({message: 'foo created'});
})
.get(function(req, res){
	res.json([{bar: 1}, {bar: 2}]);
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

module.exports = router;