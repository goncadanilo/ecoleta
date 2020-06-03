import { resolve } from 'path';

const { NODE_ENV } = process.env;
const database = NODE_ENV === 'test' ? 'test.sqlite' : 'database.sqlite';
const path = resolve(__dirname, 'src', 'database');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: resolve(path, database),
  },
  migrations: {
    directory: resolve(path, 'migrations'),
  },
  seeds: {
    directory: resolve(path, 'seeds'),
  },
  useNullAsDefault: true,
};
