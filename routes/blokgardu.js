const express = require('express')
const router = express.Router();
const blokgardu = require('../services/blokgardu');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
      res.json(await blokgardu.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting blokgardu `, err.message);
      res.status(err.statusCode || 500).json({'message': err.message});
    }
  });

  module.exports = router;