const express=require("express");
const app=express();
const PORT = 3000;

app.listen(PORT, function(err){
    if(err) console.log("Error");
    else console.log("Server listening on Port: "+PORT);
});

app.get("/", function(req,res) {

    res.sendFile(__dirname + "/index.html");

    });
