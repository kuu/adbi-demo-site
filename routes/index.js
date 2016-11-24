const express = require('express');
const debug = require('debug');
const assets = require('../models/assets');

const router = express.Router();
const print = debug('adbi');

router.get('/', (req, res) => {
  print(`/ called`);

  assets.getChannels().then(assets => {
    res.render('index', {assets});
  }).catch(err => {
    res.render('error', {err});
  });
  return;
});

module.exports = router;
