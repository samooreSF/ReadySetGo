module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/ready-set-go',
    debug: true,
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/ready-set-go',
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
