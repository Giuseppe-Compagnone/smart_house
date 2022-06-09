const http = require("http");
const SerialPort = require("serialport");
const {pipeline} = require("serialport");
const Gpio = require("onoff").Gpio;
const cors = require("cors");
const express = require("express");

const myPin = new Gpio(21,"out");
const alarmPin = new Gpio(20,"out");

const app = express();

app.use(express.static((__dirname + 'public')));
app.use(cors());
app.use(express.json());








const parser = new SerialPort.parsers.Readline({delimiter:"\r\n"});

port = new SerialPort('/dev/ttyACM0',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});


port.pipe(parser);




let server = http.createServer(app);

app.get("/",(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("Server is running");
});

const { Server } = require("socket.io");
let io = new Server(server,{
            cors: {
              origin: "http://192.168.0.69:3000",
              methods: ["GET","POST"]
            }
        });


io.on("connection",(socket)=>{

    console.log("new connection");

    socket.emit("server",{});

    socket.on("turnOn",(data)=>{

        console.log(data);
        myPin.writeSync(1);
        port.write(data.pin);
    });

    socket.on("turnOff",(data)=>{

        console.log(data);
        myPin.writeSync(0);
        port.write(data.pin);
    });

        socket.on("alarm",(data)=>{
        console.log(data);
        alarmPin.writeSync(data.status? 1 : 0);
    });

    socket.on("disconnect",()=>{
        console.log("client disconnection");
    });



})

parser.on("data",(data)=>{
    io.emit("tempHum",{data});
})



server.listen(3001);