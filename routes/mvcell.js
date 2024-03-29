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

  router.get("/:assetgroup", async function (req, res, next) {
    try {
      // res.json(await blokgardu.getById(req.params.id));
      const bg = await mvcell.getByAssetgroup(req.params.assetgroup);
      res.json(bg);
    } catch (err) {
      console.error(`Error while getting one mvcell `, err.message);
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  });

  module.exports = router;