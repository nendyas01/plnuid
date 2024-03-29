const express = require('express')
const router = express.Router();
const jointing = require('../services/jointing');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
      res.json(await jointing.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting jointing `, err.message);
      res.status(err.statusCode || 500).json({'message': err.message});
    }
  });

  router.get("/:assetgroup", async function (req, res, next) {
    try {
      // res.json(await jointing.getByAssetgroup(req.params.assetgroup));
      const jo = await jointing.getByAssetgroup(req.params.assetgroup);
      res.json(jo);
    } catch (err) {
      console.error(`Error while getting one jointing `, err.message);
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  });

  module.exports = router;