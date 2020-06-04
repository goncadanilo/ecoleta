import knex from 'knex';
import { resolve } from 'path';

const database =
  process.env.NODE_ENV === 'test' ? 'test.sqlite' : 'database.sqlite';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, database),
  },
  useNullAsDefault: true,
});

export default connection;
