const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT objectid, globalid, assetgroup, assettype, tglgambar, usergambar, tglupdate, userupdate, assetnum, classification, description, installdate, location, manufacturer, prioritas, vendor1, isolasi_kubikel, jenis_mvcell, kode_peralatan, ratio, status_kepemilikan, th_buat, type_mvcell, heater, serialnum, status, enabled, globalid_1, tujdnumber, kategori, shape, created_user, created_date, last_edited_user, last_edited_date FROM mvcell OFFSET $1 LIMIT $2', 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getMultiple,
    //create
  }