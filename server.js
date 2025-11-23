const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;
 
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (request, response) => {
  console.log("home page");});
 
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

//daily fact portion
app.get('/api/fun-fact', async (req, res) => {
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');

    res.json(response.data.text);
  } catch (error) {

    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
      res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
    } else {
      console.error('Network Error:', error.message);
      res.status(500).json({ message: 'A network error occurred.' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});