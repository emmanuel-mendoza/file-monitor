var config  = require('./server/config/config.json')
var express = require('express');
var massive = require('massive');

var app = express();
var connStr = "postgres://"+config.postgres.user+":"+config.postgres.password+"@"+config.postgres.host+"/"+config.postgres.db;

console.log(connStr);

var db = massive.connectSync({connectionString : connStr, scripts: "server/db"});

db.appdata.users.find(2, function(err, res){
    console.log(res);
});

db.find_user_by_email(['emmanuel.mendoza.sanchez@gmail.com'], function(err,res){
  console.log(res);
});

db.run("select * from appdata.files", function(err,res) {
    console.log(res);
})

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});