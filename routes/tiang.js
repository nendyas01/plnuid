const express = require('express')
const router = express.Router();
const tiang = require('../services/tiang');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
      res.json(await tiang.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting tiang `, err.message);
      res.status(err.statusCode || 500).json({'message': err.message});
    }
  });

  router.get("/:assetgroup", async function (req, res, next) {
    try {
      // res.json(await tiang.getById(req.params.id));
      const bg = await tiang.getByAssetgroup(req.params.assetgroup);
      res.json(bg);
    } catch (err) {
      console.error(`Error while getting one tiang `, err.message);
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  });
  
  module.exports = router;