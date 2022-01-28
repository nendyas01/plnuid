const express = require('express')
const router = express.Router();
const lvcable = require('../services/lvcable');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
      res.json(await lvcable.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting lvcable `, err.message);
      res.status(err.statusCode || 500).json({'message': err.message});
    }
  });

  router.get("/:assetgroup", async function (req, res, next) {
    try {
      // res.json(await lvcable.getByAssetgroup(req.params.assetgroup));
      const lc = await lvcable.getByAssetgroup(req.params.assetgroup);
      res.json(lc);
    } catch (err) {
      console.error(`Error while getting one lvcable `, err.message);
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  });
  
  module.exports = router;