const MongoClient = require('mongodb').MongoClient;

var state = {
	db: null,
}

function connect(url, done){
	if (state.db) {
		return done();
	}

	MongoClient.connect(url, function(err, db){
		if (err){
			return done(err);
		}

		state.db = db;
		done();
	})
}

function get(){
	return state.db;
}

function close(done){
	if (state.db){
		state.db.close(function(err, result){
			state.db = null;
			statet.mode = null;
			done(err);
		})
	}
}

module.exports = {
	connect: connect,
	get: get,
	close: close,
}