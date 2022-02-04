import { Request, Response, NextFunction } from 'express';
import { STATUS_MSG } from '../../constant/constant';

export const terms = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  //   const { db } = req.app.locals;
  try {
    const data = 'gand mara with your terms && condition';
    res.status(200).send({ status: 200, data, message: STATUS_MSG.FIND });
  } catch (e) {
    next(e);
  }
};
