import { resolve } from 'path';

const path = resolve(__dirname, 'src', 'database');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: resolve(path, 'database.sqlite'),
  },
  migrations: {
    directory: resolve(path, 'migrations'),
  },
  seeds: {
    directory: resolve(path, 'seeds'),
  },
  useNullAsDefault: true,
};
