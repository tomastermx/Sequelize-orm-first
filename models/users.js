
var data = require('./db');

db = data.db;
Sequelize = data.Sequelize;


var User = db.define('user', {
  username:Sequelize.STRING,
  mail: Sequelize.STRING,
  name: Sequelize.STRING

});


User.sync().then(function() {
  return User.create({

    username: 'Tomaster',
    name: 'Tomas',
    mail: 'tomas.palomino@gmail.com'
  });

return User;

});


module.exports = User;
