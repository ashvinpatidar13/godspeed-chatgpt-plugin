
const express = require('express');
const bodyParser = require('body-parser');
const pluginLogic = require('./routes/pluginLogic');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());

app.post('/search', pluginLogic);

app.listen(port, () => {
  console.log(`ChatGPT Plugin server listening at http://localhost:${port}`);
});
