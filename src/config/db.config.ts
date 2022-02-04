import { MongoClient } from 'mongodb';
import { databaseURI } from './config';

export default async (): Promise<any> => {
  // @ts-ignore
  const client = new MongoClient(databaseURI, { useUnifiedTopology: true });
  await client.connect();
  return client;
};
