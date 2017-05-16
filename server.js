var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/index.html"));
});

// app.post("/addUser", function(req,res){
//     fs.readFile("users.json", function(err,data){
//         var users = JSON.parse(data);
//         users.push(req.body);
//         fs.writeFile("users.json", JSON.stringify(users),function(){
//             res.send(true);
//         })  
//     })
// })

// app.post("/login", function(req,res){
//     var user = req.body;
//     fs.readFile("users.json", function(err,data){
//         var users = JSON.parse(data);
//         for(var i=0; i<users.length;i++){
//             console.log(user)
//             console.log(users[i])
//             if(users[i].login == user.login && users[i].password == user.password ){
//                 res.send(users[i]);
// //                break;
//             }
//         }
//     })
// })







// app.listen("8080" , function(){
//     console.log("Listen on port 8080")
// })