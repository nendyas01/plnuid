const express = require('express')
const router = express.Router();
const mvcell = require('../services/mvcell');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
      res.json(await mvcell.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting mvcell `, err.message);
      res.status(err.statusCode || 500).json({'message': err.message});
    }
  });

  module.exports = router;