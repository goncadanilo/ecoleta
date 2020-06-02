import { resolve } from 'path';

const { NODE_ENV } = process.env;
const database = NODE_ENV === 'test' ? 'test.sqlite' : 'database.sqlite';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'src', 'database', database),
  },
  migrations: {
    directory: resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
};
