let express = require('express');
let server = express();
let Config = require('./config.js');
let morgan = require('morgan');
let bodyParser = require('body-parser');

const AUTH_API = require('./api/auth/routes.js');

// setup default logger
server.use(morgan('dev'));
// parse application/x-www-form-urlencoded 
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
server.use(bodyParser.json())

server.get('/', (req, res, next) => {
  res.send('Root path is not a valid endpoint.');
});

server.get('/info', (req, res, next) => {

});

server.use('/user', AUTH_API);

module.exports = () => {
  server.listen(Config.port, () => {
    console.log(`API server listening on port ${Config.port}`);
  });
};