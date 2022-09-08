import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { router } from './routes';
import db from './config/mongo';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// testing
// console.log(`${process.cwd()}/storage`);
// console.log(`${__dirname}/storage`);

db().then(() => console.log('Connect MongoDB Success'));


app.listen(PORT, () => console.log(`Run on port ${PORT}`));