const myprodgRoutes = require('./myprodg_routes');

module.exports = function(app, db) {
	myprodgRoutes(app, db);
}