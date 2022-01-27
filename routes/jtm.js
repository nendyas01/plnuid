const express = require("express");
const router = express.Router();
const jtm = require("../services/jtm");

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await jtm.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting jtm `, err.message);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

module.exports = router;