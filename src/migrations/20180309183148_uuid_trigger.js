
exports.up = function(knex) {
  return knex.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`).then(() => {
    return knex.raw(`
      CREATE FUNCTION trigger_uuid_generation()
        RETURNS TRIGGER AS $$
        BEGIN
          IF (TG_OP = 'INSERT') THEN
            NEW.uuid = uuid_generate_v4();
          END IF;
          RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
    `);
  });
};

exports.down = function(knex) {
  return knex.raw(`DROP FUNCTION IF EXISTS generate_v4_uuid`);
};