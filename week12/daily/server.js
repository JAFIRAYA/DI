const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  if (typeof hobby !== 'string') {
    res.status(404).send('Invalid hobby');
  } else {
    res.send(hobby);
  }
});

app.get('/pic', (req, res) => {
  res.sendFile(__dirname + '/public/picture.html');
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});

app.get('/formData', (req, res) => {
  const { email, message } = req.query;

 
  if (!email || !message) {
    res.status(400).send('Email and message are required');
  } else {
    res.send(`${email} sent you a message: "${message}"`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
