const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:8765');

socket.onopen = () => {
    const numbers = [8, 15];
    socket.send(JSON.stringify({ numbers }));
    console.log('Sent to Python:', numbers);
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.result !== undefined) {
        console.log('Result from Python:', data.result);
    } else {
        console.error('Error from Python:', data.error);
    }
};
asdsdaaffafafa