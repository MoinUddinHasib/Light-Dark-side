const express=require("express");
const app=express();
const PORT = 4000;
const mysql = require("mysql");

app.set("view engine", "ejs");

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_db',
    port : '3000'
  });

db.connect(function(err){
    if(err) console.log("Error with db");
    else console.log("db connected...");
});

app.listen(PORT, function(err){
    if(err) console.log("Error");
    else console.log("Server listening on Port: "+PORT);
});

app.get("/", function(req,res) {
    var sql = "SELECT * FROM Statistics";
    var query = db.query(sql, function(err,result){
        if(err) console.log("Error on fetch: ",err);
        else{
            res.render('index', JSON.parse(result[0].Dati));
            console.log("Data fetched");
            console.log(result[0].Dati);
        } 
    });

});
