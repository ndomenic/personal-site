const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const fs = require('fs');
const buildDir = path.join(__dirname, '..', '..', 'client', 'build');
const app = express();

//Setup the express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.enable('trust proxy');
app.use(cors());

//Overwrite the serving of static image files, instead getting the client to download the resume pdf
app.get('/personalSite/resume.pdf', function(req, res){
  res.download(__dirname + '/files/Resume.pdf');
});

//Serve the static image files
app.use(`/personalSite`, express.static(__dirname + '/files'));

//Configure express to serve the static files 
app.use(`/`, express.static(buildDir));

//Serve the static html if none of the above endpoints were hit
app.get(`/*`, (req, res, next) => {
  res.sendFile(path.join(buildDir, 'index.html'), (err) => {
    if (err) {
      res.json(err);
    }
  });
});

if (process.env.NODE_ENV == 'production') {
  //Certificate
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/domenichini.ca/privkey.pem', 'utf8');
  const certificate = fs.readFileSync('/etc/letsencrypt/live/domenichini.ca/cert.pem', 'utf8');
  const ca = fs.readFileSync('/etc/letsencrypt/live/domenichini.ca/chain.pem', 'utf8');

  https.createServer({
    key: privateKey,
    cert: certificate,
    ca: ca
  }, app).listen(8000, () => console.log(`Listening on port 8000`));
} else {
  http.createServer(app).listen(8000, () => console.log('HTTP Server running on port 8000'));
}