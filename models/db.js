

var Sequelize = require('sequelize');

/////////////RECUERDA PRIMERO CREAR LA BASE DE DATOS
var  db = new Sequelize('sequelize','tomaster','tomaster', {
host:'localhost',
dialect: 'mysql'




});




var data = {};

data.db = db;
data.Sequelize = Sequelize;

module.exports = data;




// load models



/* recuerda las comas después de STRING
Es confuso cuando  es Sequelize ó Sequelize
recuerda después de instalar todo con npm-install
correr el comando:
 npm install --save mysql // For both mysql and mariadb dialects

*/

//ACUERDATE DE SINQUEAR LAS TABLAS
