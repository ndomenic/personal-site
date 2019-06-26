const {address, endpointPreface} = require('./config');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const buildDir = path.join(__dirname, '..', '..', 'client', 'build');
const app = express();

//Setup the express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.enable('trust proxy');
app.use(cors());

//Sample API get request
app.get(`${endpointPreface}/getData`, (req, res, next) => {
  //Sends some sample data
  res.json({'sample': 'The server is currently running in ' + process.env.NODE_ENV + ' mode'});
})

//Configure express to serve the static files 
app.use(`${address}`, express.static(buildDir))

//Serve the static html if none of the above endpoints were hit
app.get(`${address}/*`, (req, res, next) => {
  res.sendFile(path.join(buildDir, 'index.html'), (err) => {
    if (err) {
      console.log(err);
      res.json(err);
    }
  })
})

//Listen for requests on the specified port 
app.listen(port, () => console.log(`Listening on port ${port}`));