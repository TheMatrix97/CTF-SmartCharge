const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world! I\'m the Smartcharger APP');
});

app.get('/ping', (req, res) => {
    let aws_id = process.env.AWS_ACCESS_KEY_ID;
    let aws_secret = process.env.AWS_SECRET_ACCESS_KEY;
    res.send('Pong');
});

app.listen(port, () => {
    console.log(`API Started! -> http://localhost:${port}`);
});