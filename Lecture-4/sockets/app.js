const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);



app.use('/', express.static(path.join(__dirname, '/public')));


io.on('connection', (socket) => {

    console.log("Connection Established");
    console.log(socket.id);

    socket.on('send-msg', (data) => {

        console.log(`${data.msg} send by ${socket.id}`);

        io.emit('received-msg', {
            id: socket.id,
            msg: data.msg
        })

    })
})





server.listen(process.env.PORT || 3003, () => {
    console.log("Server running at port 3003");
})