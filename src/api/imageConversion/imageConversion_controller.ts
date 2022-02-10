import express from 'express';
import jmp from 'jimp';
import _ from 'lodash';
import { deleteFile } from '../../middleware/deleteFile';

export const jpgToPng = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { file } = req;
  try {
    const image = await jmp.read(file?.path || '', (err, image) => {
      if (err) {
        next(err);
      }
      return image.write(`${__dirname}/assets/images/${_.random()}.png`);
    });
    deleteFile(file);

    res.send(image);
  } catch (err) {
    deleteFile(file);
    next(err);
  }
};
