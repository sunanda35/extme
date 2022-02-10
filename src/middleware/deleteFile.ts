import _ from 'lodash';
import fs from 'fs';
import { NextFunction } from 'express';

export const deleteFiles = async (files: any): Promise<any> => {
  try {
    _.map(files, (file) => {
      fs.unlinkSync(file.path || '');
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteFile = async (file: any): Promise<any> => {
  try {
    fs.unlinkSync(file.path || '');
  } catch (err) {
    throw new Error(err);
  }
};
