const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
 });

 //Whenever someone connects this gets executed
io.on('connection', (socket) => {
    console.log('A user connected');
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', () => {
       console.log('A user disconnected');
    });
 });

const PORT = 3000;

http.listen(PORT, (req, res) => {
    console.log("Magic Happens on Port: " + PORT);
});