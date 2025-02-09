const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world! I\'m the Smartcharger APP');
});

app.listen(port, () => {
  console.log(`API Started! -> http://localhost:${port}`);
});