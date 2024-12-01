// Create web server
const express = require('express');
const app = express();
// Create a server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Create a route
app.get('/comments', (req, res) => {
  res.send('This is a comments page');
});