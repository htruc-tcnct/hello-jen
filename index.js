const express = require('express');

const app = express();
const port = 3000;

app.get('/contact', (req, res) => {
    res.send('Hello Jenkins!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});