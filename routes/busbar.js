const express = require('express')
const router = express.Router();
const busbar = require('../services/busbar');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
      res.json(await busbar.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting busbar `, err.message);
      res.status(err.statusCode || 500).json({'message': err.message});
    }
  });

  router.get("/:assetgroup", async function (req, res, next) {
    try {
      // res.json(await busbar.getByAssetgroup(req.params.assetgroup));
      const bb = await busbar.getByAssetgroup(req.params.assetgroup);
      res.json(bb);
    } catch (err) {
      console.error(`Error while getting one busbar `, err.message);
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  });
  
  module.exports = router;