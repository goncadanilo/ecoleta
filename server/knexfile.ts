import { resolve } from 'path';

const path = resolve(__dirname, 'src', 'database');
const database =
  process.env.NODE_ENV === 'test' ? 'test.sqlite' : 'database.sqlite';

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
