import express from 'express';
import morgan from 'morgan';
import { environment } from '../config/config';
import terms from '../api/terms&condition/terms_route';

const router = express.Router();
if (environment === 'development') {
  router.use(morgan('dev'));
}
router.use('/terms', terms);

export default router;
