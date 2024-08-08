const express = require('express');
const routes = require('./routes');


const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});