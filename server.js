const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// GET test route to see if PORT is working...hello world should display on the page in JSON format
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });