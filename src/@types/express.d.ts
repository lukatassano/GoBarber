import { response } from 'express';

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
