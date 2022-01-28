const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query( 
   'SELECT * FROM "sde"."lvcable_evw" OFFSET $1 LIMIT $2',
     [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getByAssetgroup(assetgroup = 1) {
  const rows = await db.query(
    /* "SELECT objectid, globalid, assetgroup, assettype, tglgambar, usergambar, tglupdate, userupdate, assetnum, classification, description, installdate, location, manufacturer, prioritas, vendor1, jenis_pelayanan, kode_peralatan, status_kepemilikan, status_rc, type_bangunan_gardu, type_gardu, status, tujdnumber, serialnum, globalid_1, shape, created_user, created_date, last_edited_user, last_edited_date FROM blokgardu where objectid = $1",
    */ 'SELECT * FROM "sde"."lvcable_evw" where assetgroup = $1',
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
    getByAssetgroup,
    /* create */
  }