const express = require("express");
const router = express.Router();
const mvcable = require("../services/mvcable");

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await mvcable.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting mvcable `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message });
  }
});

router.get("/:assetnum", async function (req, res, next) {
  try {
    // res.json(await blokgardu.getById(req.params.id));
    const bg = await mvcable.getByAssetnum(req.params.assetnum);
    res.json(bg);
  } catch (err) {
    console.error(`Error while getting one mvcable `, err.message);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

module.exports = router;