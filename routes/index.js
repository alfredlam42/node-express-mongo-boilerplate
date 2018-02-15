const fooRoute = require('./foo.js');

function init(server, db){
	server.use('/foo', fooRoute(db));
}

module.exports = {
	init: init,
};