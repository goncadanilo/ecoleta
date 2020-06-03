import express from 'express';
import cors from 'cors';
import { resolve } from 'path';

import routes from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/v1', routes);
    this.app.use('/files', express.static(resolve(__dirname, '..', 'uploads')));
  }
}

export default new App().app;
