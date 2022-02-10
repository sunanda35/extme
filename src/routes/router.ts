import express from 'express';
import morgan from 'morgan';
import { environment } from '../config/config';
import terms from '../api/terms&condition/terms_route';
import imageConversion from '../api/imageConversion/imageConversion_route';

const router = express.Router();
if (environment === 'development') {
  router.use(morgan('dev'));
}

router.use('/terms', terms);
router.use('/image-conversion', imageConversion);

export default router;
