const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const PORT = 7000;

const socketio =  require("socket.io");
const server =  http.createServer(app);
const io = socketio(server);
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"./public")));

app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen(PORT,()=>{console.log("server  on port "+PORT)});