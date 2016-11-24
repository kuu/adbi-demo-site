const express = require('express');
const debug = require('debug');
const config = require('config');

const api = require('../libs/ooyala');

const router = express.Router();
const print = debug('adbi');

const {pcode, playerBrandingId, version} = config.player;

router.get('/:id', (req, res) => {
  const embedCode = req.params.id;

  print(`/content/${embedCode} called.`);

  const embedToken = api.getTokenRequest(embedCode);

  res.render('content', {embedCode, pcode, playerBrandingId, version, embedToken});
});

module.exports = router;
