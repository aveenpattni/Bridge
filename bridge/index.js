const express = require('express');
const app = express();

const PORT = 8080;

app.use("/bridge", require('./routes/bridge.js'));

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});