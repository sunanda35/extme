import express from 'express';
import morgan from 'morgan';
import { environment } from '../config/config';

const router = express.Router();
if (environment === 'development') {
  router.use(morgan('dev'));
}

export default router;
