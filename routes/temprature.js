"use strict"

var request = require('request');



function getCurrentTime() {
  var d_names = new Array("Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday");
  var currentdate = new Date(); 
  var datetime = d_names[currentdate.getDay()] + '   ' + currentdate.getHours() + ':' + currentdate.getMinutes();
  return datetime;
}

var temp = {
  currentTemp: function(req,res) {
    var API_URL = 'http://api.openweathermap.org/data/2.1/find/name?units=metric&q=';
    API_URL += req.params.city;
   request.get({url: API_URL, json: true},function(e,r,b){
     if(!e){
      if(b.list) {
        var ct = (b.list[0].main.temp + '');
      ct[1] !== '.' ?  ct= ct.substring(0,2) : ct=ct.substring(0,1);
      var desc = b.list[0].weather[0].description;
      var cname = b.list[0].name;
      res.render('temprature', {ct: ct, cname: cname, desc: desc, time: getCurrentTime()});
    } else {
      res.render('homepage');
    }
      
     }
    });
  }

};

module.exports = temp;
