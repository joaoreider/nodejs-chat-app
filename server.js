const net = require('net');

const server = net.createServer((socket) => {});

server.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("data", (data) => {
    console.log(data.toString("utf-8"));
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.write("Welcome to the server");
});



server.listen(3008, "127.0.0.1", () => {
  console.log('TCP Server is running on ', server.address());
});