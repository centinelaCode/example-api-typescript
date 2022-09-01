import 'dotenv/config';
import { connect } from 'mongoose';

async function dbConnect(): Promise<void> {
  const DB = <string>process.env.DB_URI;
  await connect(DB);
}

export default dbConnect;