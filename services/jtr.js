const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT objectid, globalid, assetgroup,assettype, tglgambar, usergambar,tglupdate, userupdate,assetnum, classification, description, installdate, location, manufacturer, prioritas,  vendor1, bahan_kawat, fasa_jaringan, hantaran_netral, jenis_kabel, jenis_konduktor, kode_peralatan, panjang_hantaran, status_kepemilikan, tipe_kabel_sktr, ukuran_kawat, letak_lvcable, posisi_fasa, volume, tujdnumber, status,serialnum, enabled, globalid_1, kode_lvcable, shape, created_user, created_date, last_edited_user, last_edited_date FROM jtr OFFSET $1 LIMIT $2",
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
module.exports = {
  getMultiple,
  // create,
};