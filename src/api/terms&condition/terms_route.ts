import express from 'express';
import { terms } from './terms_controller';

const router = express.Router();

router.get('/', terms);

export default router;
