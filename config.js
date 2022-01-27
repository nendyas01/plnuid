const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || '10.3.0.23',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'sde',
    password: env.DB_PASSWORD || 'sde1234jkt',
    database: env.DB_NAME || 'dev_egdb_disjaya',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
