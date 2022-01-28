const express = require("express");
const router = express.Router();
const trafo = require("../services/trafo");

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await trafo.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting trafo `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message });
  }
});

router.get("/:assetgroup", async function (req, res, next) {
  try {
    // res.json(await blokgardu.getById(req.params.id));
    const tf = await trafo.getByAssetGroup(req.params.assetgroup);
    res.json(tf);
  } catch (err) {
    console.error(`Error while getting one trafo `, err.message);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

module.exports = router;