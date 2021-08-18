const express = require('express');
const app = express();
const PORT = 3000;

const {Server} = require('socket.io');

const http = require('http');
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) =>{
    console.log("user connected");
    socket.on('on-chat', data => {
       io.emit('user-chat', data)
    })
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
server.listen(PORT, () =>{
    console.log(`Server running in port: ${PORT}`);
});