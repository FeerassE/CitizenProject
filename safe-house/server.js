const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const path = require('path');

const cors = require('cors');

app.use(cors());

app.use(bodyParser);

app.use(express.static(path.join(__dirname, 'client/build')));

/* 
mongoLab database info:

username: feerass
password: iamgamerlink

url ->     mongodb://feerass:iamgamerlink@ds133557.mlab.com:33557/gamerlink
*/

// mongoose.connect('mongodb://feerass:iamgamerlink@ds133557.mlab.com:33557/gamerlink');

const port = process.env.PORT || 8080; 

// mongoose.Promise = global.Promise;


// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
// 	console.log("Connected to db at mlab")
// });



//GET AN INDIVIDUAL USER
app.post('/post', function(req,res) {
    console.log(req.body);
    res.send("yo");
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


// Make sure to include. Connects to localhost
app.listen(port, ()=> {
  console.log(`Im listening on port ${port}.`)
})
