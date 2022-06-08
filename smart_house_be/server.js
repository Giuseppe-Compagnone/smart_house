const http = require("http");
const cors = require("cors");
const express = require("express");
const { Server } = require("socket.io");
const { SerialPort , ReadlineParser } = require("serialport");
const Gpio = require("onoff").Gpio;

const myPin = new Gpio(21,"out");
const alarmPin = new Gpio(20,"out");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static((__dirname + 'public')));



const port = new SerialPort({ 
    path:'/dev/ttyACM0',
    baudRate: 9600,
    autoOpen: true
});




const parser = new ReadlineParser()
port.pipe(parser)



myPin.writeSync(1);
port.write("5");
port.write(Buffer.from("5"));

const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.writeHead(200);
    res.end("Server is running");
})

const socket = new Server(server, {
    cors: {
      origin: "http://192.168.0.69:3000",
      methods: ["GET","POST"]
    }
});

socket.on("connection",(socket)=>{
    console.log("new connection");

    socket.emit("server",{});

    socket.on("alarm",(data)=>{
        console.log(data);
        alarmPin.writeSync(data.status? 1 : 0);
    });

    socket.on("rooms",(data)=>{
        let rooms=data.data;

        //for(let i=0;i<rooms.length;i++){
            //let x = rooms[1];
            myPin.writeSync(1);
            port.write('5');            
        //};
    });

    socket.on("disconnect",()=>{
        console.log("client disconnection");
    });
});

parser.on("data",(data)=>{
    socket.emit("tempHum",{data});
});

server.listen(3001,()=>{
    console.log("server start");
});
