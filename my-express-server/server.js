const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("Hello")
});

app.get("/contact", function(req, res){
    res.send("Contact me on: rus@jdhzc");
});

app.get("/about", function(req, res){
    res.send("Myself Rushikesh Bhosale");
});

app.listen(3000, function(){
    console.log("Server started at port 3000")
});