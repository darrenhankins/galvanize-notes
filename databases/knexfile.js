require("dotenv").load();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/pokemon',
    debug: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
