const express = require('express');
const app = express();
const port = 3000;

/////////////////////////////////////////////////////////////////
// Setup Server configuration
/////////////////////////////////////////////////////////////////

// Enable static file serving for the website.
app.use('/', express.static('public'));

// Enable JSON parsing.
app.use('/api', express.json());

////////////////////////////////////////////////////////////////
// Api Endpoints
////////////////////////////////////////////////////////////////
app.get('/api/getMessage', function (req, res) {
    const data = {
        message: 'Hello World!'
    }

    res.send(JSON.stringify(data));
});
  
const database = [];

app.post('/api/createTask', function(req, res) {
    database.push(req.body);
    res.send({status: 'success'});
});

app.get('/api/tasks', function (req, res) {
    res.send(JSON.stringify(database));
})


/////////////////////////////////////////////////////////////////
// Start the app.
/////////////////////////////////////////////////////////////////
app.listen(port, () => console.log(`Visit http://localhost:3000 to get started.\n\nFollow the errors and try to get things working.\n\nGood Luck!!`));