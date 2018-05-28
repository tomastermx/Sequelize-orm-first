


var User = require('../models/users');

var users;



exports.index = function(req,res,next){

};

exports.create = function(req,res){
res.render('form');

};


exports.docreate =  function(req,res){

console.log(req.body.FullName);
console.log(req.body.email);
console.log(req.body.Alias);

db.sync().then(function(){

User.create({

username:req.body.Alias,
name: req.body.FullName,
mail:req.body.email


      });

res.redirect('/');


});

};


exports.all = function(req,res){

User.findAll().then(users => {

  console.log(users);
     res.render('list', {users:users});

});




};
