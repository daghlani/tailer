const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const LOG_FILE_PATH = '/logs/logfile.log';

app.use(express.static('public'));

app.get('/logs', (req, res) => {
  const stream = fs.createReadStream(LOG_FILE_PATH, { encoding: 'utf8' });
  stream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

