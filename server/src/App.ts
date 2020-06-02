import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import routes from './routes';
import AppError from './errors/AppError';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
    this.handleErrors();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/v1', routes);
  }

  private handleErrors(): void {
    this.app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          message: err.message,
        });
      }

      return res.status(500).json({
        message: 'Internal Server Error',
      });
    });
  }
}

export default new App().app;
