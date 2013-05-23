"use strict"

var home = {
  index: function(req,res) {
   res.render('homepage');
 },

 mw1: function(req,res,next) {

  console.log('mw1 is called !');
  next();
 },

 page1: function(req,res){
  res.render('page1');
 }

}

module.exports = home;
