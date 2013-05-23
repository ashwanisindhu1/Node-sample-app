"use strict"

var fs = require('fs');


var file = {

  multiUpload: function(req,res,next) {
    var files = Object.keys(req.files);
    var i;

    for(i=0;i<files.length;i++) {
      var filePath = req.files[files[i]].path;
      var filename = req.files[files[i]].name;
      var isLast = (i === files.length -1)? 1: 0;

      (function(fp, fn, doStop) {
        fs.readFile(fp, function(err,data) {
        var newPath = __dirname + "/../uploads/" + fn;
        fs.writeFile(newPath, data, function(err){
          if(!err) {
            console.log('Successfully uploaded file: ' + fn);
            if(doStop) {
              res.render('uploadSuccess');
            }
          }
        });
      });
      })(filePath,filename, isLast);
    }

  },

  singleUpload: function(req,res,next) { 
    var fp = req.files.pic1.path;
    var fn = req.files.pic1.name;

    fs.readFile(fp, function(err,data) {
        var newPath = __dirname + "/../uploads/" + fn;
        fs.writeFile(newPath, data, function(err){
          if(!err) {
            console.log('Successfully uploaded file: ' + fn);
            res.render('uploadSuccess');
          }
        });
      });
  },


  morePic: function(req,res) {
    res.render('morepictures');
  },

  singlePic: function(req,res) {
    res.render('pictures');
  }

};

module.exports = file;