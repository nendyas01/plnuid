const express = require("express");
const router = express.Router();
const jtr = require("../services/jtr");

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await jtr.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting jtr `, err.message);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

module.exports = router;