const http = require("http");
const cors = require("cors");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.writeHead(200);
    res.end("Server is running");
})

const socket = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET","POST"]
    }
});

socket.on("connection",(socket)=>{
    console.log("new connection");

    socket.emit("server",{});

    socket.on("disconnect",()=>{
        console.log("client disconnection");
    })
})

server.listen(3001,()=>{
    console.log("server start");
});


