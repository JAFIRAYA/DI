/*const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
  const user = { firstname: 'John', lastname: 'Doe' };
  res.send(JSON.stringify(user));
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

-------------exercce2-----------------
const express = require('express');
const app = express();
const port = 3000;

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const responseObj = { id: id };
  res.json(responseObj);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





*/

