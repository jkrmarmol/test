const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res, next) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`)
});