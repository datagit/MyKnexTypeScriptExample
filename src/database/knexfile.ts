require('ts-node/register');

module.exports = {
    client: process.env.DATABASE_CLIENT || 'pg',
    // <user>:<password>@<host>:<port>/<db_name>
    connection: process.env.DATABASE_URL || 'postgres://api-user@localhost:5432/api-example',
    pool: {
        min: Number(process.env.DATABASE_POOL_MIN || '2'),
        max: Number(process.env.DATABASE_POOL_MAX || '10')
    },
    migrations: {
        tableName: process.env.DATABASE_MIGRATIONS_TABLE || 'knex_migrations',
        directory: process.env.DATABASE_MIGRATIONS_DIRECTORY || 'migrations'
    },
    timezone: process.env.DATABASE_TIMEZONE || 'UTC'
};