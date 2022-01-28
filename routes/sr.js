const express = require('express')
const router = express.Router();
const sr = require('../services/sr');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
      res.json(await sr.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting sr `, err.message);
      res.status(err.statusCode || 500).json({'message': err.message});
    }
  });

  router.get("/:assetgroup", async function (req, res, next) {
    try {
      // res.json(await sr.getById(req.params.id));
      const bg = await sr.getByAssetgroup(req.params.assetgroup);
      res.json(bg);
    } catch (err) {
      console.error(`Error while getting one sr `, err.message);
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  });
  
  module.exports = router;