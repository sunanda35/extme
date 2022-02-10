import express from 'express';
import { jpgToPng } from './imageConversion_controller';
import uploadFile from '../../middleware/uploadFile';

const router = express.Router();

router.post('/jpg-to-png', uploadFile('./assets/uploadedFiles').single('file'), jpgToPng);

export default router;
