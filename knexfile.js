// Update with your config settings.

module.exports = {
  development: {
    client: 'postgres',
    migrations: {
      directory: __dirname + "/src/migrations",
      tableName: 'migrations'
    }
  }
};
