// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Require Express to run server and routes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
//Create a server running on the port 

const port = 5500;
const server = app.listen(port, listening);
function listening() {
    console.log('Server is running');
    console.log(`runs on localhost:${port}`);
};








//creating array to save projectData object
const data = [];
// making post to retrieve data and post route
app.post('/all', (request, response)=>{

    let newData = request.body;
    projectData['date'] = newData.date;
    projectData['temp'] = newData.temp;
    projectData['feel'] = newData.feel;
    data.push(projectData);
    response.send(projectData);
    console.log(projectData);
});

//Add a GET route that returns the projectData object in your server code

app.get('/all', function (req, res) {
    res.send('projectData');
});

