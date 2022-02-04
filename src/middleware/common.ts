import { NextFunction, Request, Response } from 'express';
import { environment } from '../config/config';
import createHttpError from 'http-errors';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const path = req.path;
  next(createHttpError(400, `${path} is not available!`));
};
export const errorHandler = (e: any, req: Request, res: Response, next: NextFunction) => {
  res.status(e.status || 500).send({
    status: e.status || 500,
    message: e.message || 'Something went wrong',
    ...(environment === 'development' && { stack: e.stack }),
  });
};
