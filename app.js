const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());

const PORT = 3001

app.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
  res.redirect('/');
})

app.listen(PORT, () => {
  console.log( `Server listening on port ${PORT}`)
})