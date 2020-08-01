const express=require("express");
const app=express();
const PORT = 4000;
const mysql = require("mysql");
var obj;
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
    db.query(sql, function(err,result){
        if(err) console.log("Error on fetch: ",err);
        else{
            obj= JSON.parse(result[0].Dati);
            res.render('index', obj);
            console.log("Data fetched");
        } 
    });

});

app.get("/update", function(req,res) {
    var sql = "UPDATE Statistics SET Dati = '{\"times\":"+(obj.times+1)+", \"last\":"+!obj.last+"}' ";
    db.query(sql, function(err,result){
        if(err) console.log("Error on update: ",err);
        else console.log("Data updated");
    });
    res.redirect("/");
});