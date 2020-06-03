import knex from 'knex';
import { resolve } from 'path';

const { NODE_ENV } = process.env;
const database = NODE_ENV === 'test' ? 'test.sqlite' : 'database.sqlite';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: resolve(
      __dirname,
      'src',
      'shared',
      'infra',
      'database',
      database,
    ),
  },
  useNullAsDefault: true,
});

export default connection;
