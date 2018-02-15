const fooRoute = require('./foo.js');

function init(server){
	server.use('/foo', fooRoute);
}

module.exports = {
	init: init,
};