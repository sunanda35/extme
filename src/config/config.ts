import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const environment = process.env.NODE_ENV || 'development';
export const port = process.env.PORT || 4000;
export const databaseURI = process.env.DB_URI;
