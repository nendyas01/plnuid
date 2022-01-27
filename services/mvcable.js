const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT objectid, globalid, assetgroup, assettype, tglgambar, usergambar, tglupdate, userupdate, assetnum, classification, description, installdate, location, manufacturer, prioritas, vendor1, fasa_jaringan, hantaran_netral, jenis_mvcable, kode_peralatan, panjang_hantaran, status_kepemilikan, status_pny, serialnum, status, tujdnumber, enabled, globalid_1, ukuran_kawat, kode_trafo_gi, kode_mvcell_gi, shape,  created_user, created_date, last_edited_user, last_edited_date FROM mvcable OFFSET $1 LIMIT $2',
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

  