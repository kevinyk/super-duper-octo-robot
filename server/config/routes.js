var Users = require('./../controllers/users.js');
var path = require('path');
module.exports = function(app){
	app.post('/api/users', Users.register);
	app.post('/api/login', Users.login);
	app.get('/api/success', Users.success);
	app.get('/api/users', Users.index);
	app.get('/api/logout', Users.logout);
	app.get('/api/users/current', Users.getCurrent);
	app.get('/api/users/:id', Users.show);
	app.all('*', (req,res)=>res.sendFile(path.resolve('./public/dist/index.html')));
}