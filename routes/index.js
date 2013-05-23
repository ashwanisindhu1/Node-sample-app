"use strict";

var home = require('./home');
var temprature = require('./temprature');
var file = require('./file');

module.exports = function(app) {

  app.get('/page1', home.mw1, home.page1);
  app.get('/temprature/:city', temprature.currentTemp);
  
  app.post('/singleupload', file.singleUpload);
  app.post('/multiupload', file.multiUpload);

  app.get('/morepictures', file.morePic);
  app.get('/pictures', file.singlePic);



  app.get('/*', home.index);
};
