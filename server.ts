import express, { Express, Request, Response } from 'express';
import { port } from './src/config/config';
import { notFound, errorHandler } from './src/middleware/common';
import routers from './src/routes/router';
import mongoConnection from './src/config/db.config';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import toobusy from 'toobusy-js';

const app: Express = express();

app.use(
  express.json({
    limit: '20mb',
  })
);
app.use(hpp());
app.use(helmet());
app.use(
  cors({
    exposedHeaders: ['Content-Disposition'],
  })
);

app.use('/api', routers);

// const database = async () => {
//   const client = await mongoConnection();
//   app.locals.db = client.db();
// };
// database().then(() => {
//   console.log('Database Connected Successfully!');
// });

app.use((req, res, next) => {
  if (toobusy()) {
    // log if you see necessary
    res.status(503).send('Server Too Busy');
  } else {
    next();
  }
});
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Main extme Backend application!</h1>');
});
app.use(notFound);
app.use(errorHandler);

export default app.listen(port, () => console.log(`Running on http://localhost:${port} ⚡`));
