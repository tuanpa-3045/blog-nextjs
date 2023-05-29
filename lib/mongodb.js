import { MongoClient } from 'mongodb';

if (!process.env.NEXT_PUBLIC_URL_MONGODB) {
  throw new Error('Invalid env variable: NEXT_PUBLIC_URL_MONGODB');
}

const uri = process.env.NEXT_PUBLIC_URL_MONGODB;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
