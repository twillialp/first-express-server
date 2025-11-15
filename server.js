const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
 
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (request, response) => {
  console.log("home page");});
 
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});