
const net = require('net');
const readline = require('readline/promises');

// ask question for the client
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const client = net.createConnection({ port: 3008, host: "localhost" }, async () => {
  console.log('Connected to server!');
  const message = await rl.question('Enter your message > ');
  client.write(message);

});

client.on('close', (data) => {
  console.log('Connection closed');
});

client.on('end', () => {
  console.log('Disconnected from server');
});