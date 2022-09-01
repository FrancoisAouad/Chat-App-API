import { Server } from 'socket.io';

const io = new Server(3000);
console.log(io);
io.on('connection', (socket) => {
    // send a message to the client
    socket.emit('hello from server'.yellow.bold, 1, '2', {
        3: Buffer.from([4]),
    });

    // receive a message from the client
    socket.on('hello from client', (...args) => {
        // ...
        console.log('ping');
    });
});
