import knex from 'knex';
import { resolve } from 'path';

const filename =
  process.env.NODE_ENV === 'test'
    ? resolve(__dirname, 'test.sqlite')
    : resolve(__dirname, 'database.sqlite');

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename,
  },
});

export default connection;
