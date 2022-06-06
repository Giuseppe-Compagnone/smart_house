const http = require("http");
const cors = require("cors");
const express = require("express");
const { Server } = require("socket.io");
const SerialPort = require("serialport");
const Gpio = require("onoff").Gpio;

const myPin = new Gpio(21,"out");
const alarmPin = new Gpio(20,"out");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static((__dirname + 'public')));

const server = http.createServer(app);

const parser = new SerialPort.parsers.Readline({dilimiter:"\r\n"});

port = new SerialPort('/dev/ttyACM0',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});


port.pipe(parser);

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

    socket.on("turnOn",(data)=>{

        console.log(data);
        myPin.writeSync(data.status);
        port.write(data.write);
    });

    socket.on("turnOff",(data)=>{

        console.log(data);
        myPin.writeSync(data.status);
        port.write(data.write);
    });

    socket.on("alarm",(data)=>{
        console.log(data);
        alarmPin.writeSync(data.status? 1 : 0);
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


