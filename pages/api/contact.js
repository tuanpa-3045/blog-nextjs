import moment from 'moment';
import { MongoClient } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export const getData = async () => {
  const mongoClient = await clientPromise;
  const data = await mongoClient.db().collection('messages').find().toArray();

  return JSON.parse(JSON.stringify(data));
};

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const time = moment();
    const newMessage = {
      email,
      name,
      message,
      created: time.toDate(),
      updated: time.toDate(),
    };

    let client;

    const connectionString = process.env.NEXT_PUBLIC_URL_MONGODB;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
  }

  if (req.method === 'GET') {
    const data = await getData();
    res.status(200).json({ posts: data });
  }
}

export default handler;
