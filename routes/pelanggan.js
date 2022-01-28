const express = require("express");
const router = express.Router();
const pelanggan = require("../services/pelanggan");

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await pelanggan.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting pelanggan `, err.message);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

router.get("/:idpelanggan", async function (req, res, next) {
  try {
    // res.json(await blokgardu.getById(req.params.id));
    const plg = await pelanggan.getByIdPelanggan(req.params.idpelanggan);
    res.json(plg);
  } catch (err) {
    console.error(`Error while getting one pelanggan `, err.message);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

module.exports = router;