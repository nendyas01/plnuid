const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    //"SELECT objectid, globalid, assetgroup,assettype, tglgambar, usergambar,tglupdate, userupdate,assetnum, classification, description, installdate, location, manufacturer, prioritas,  vendor1, bahan_kawat, fasa_jaringan, hantaran_netral, jenis_kabel, jenis_konduktor, kode_peralatan, panjang_hantaran, status_kepemilikan, tipe_kabel_sktr, ukuran_kawat, letak_lvcable, posisi_fasa, volume, tujdnumber, status,serialnum, enabled, globalid_1, kode_lvcable, shape, created_user, created_date, last_edited_user, last_edited_date FROM jtr OFFSET $1 LIMIT $2",
    "SELECT * FROM trafo_evw OFFSET $1 LIMIT $2",
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getByAssetGroup(assetgroup = 1) {
  const rows = await db.query(
    //"SELECT objectid, globalid, assetgroup,assettype, tglgambar, usergambar,tglupdate, userupdate,assetnum, classification, description, installdate, location, manufacturer, serialnum, status, tudjnumber,vendor1, fasa_trafo,jenis_trafo, kapasitas, kode_peralatan, no_trafo, owner_pemeliharaan, peruntukan, posisi_fasa, rujukahantaran_netral, jenis_kabel, jenis_konduktor, kode_peralatan, panjang_hantaran, status_kepemilikan, tipe_kabel_sktr, ukuran_kawat, letak_lvcable, posisi_fasa, volume, tujdnumber, status,serialnum, enabled, globalid_1, kode_lvcable, shape, created_user, created_date, last_edited_user, last_edited_date FROM jtr where assetgroup = $1",
    'SELECT * FROM "sde"."trafo" where assetgroup = $1',
    [assetgroup]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { assetgroup };

  return {
    data,
    meta,
  };
}
module.exports = {
  getMultiple,
  getByAssetGroup,
  // create,
};