const express = require('express');
const router = express.Router();
const Authenticator = require('./api.js');
const Auth_API = new Authenticator();

router.post('/auth', (req, res, next) => {
  Auth_API.auth(req.body.user).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(403).send(err);
  });
});

router.post('/create', (req, res, next) => {
  Auth_API.create(req.body.user).then((result) => {
    res.send(result);
  }).catch((err) => {
    res.send(err);
  });
});

module.exports = router;