const Knex = require('knex');

const knex = Knex({
  client: 'postgres',

  connection: "postgres://postgres:postgres@localhost:5400/postgres",

  // configure migrations
  migrations: {
    directory: __dirname + "/src/migrations",
    tableName: 'migrations'
  },

  debug: false
});

knex.migrate.latest().then(() => {
  console.log("Migration successful");
  process.exit(1);
}).catch((err) => {
  console.log("Error during migration");
  console.log(err);
  process.exit(1);
});