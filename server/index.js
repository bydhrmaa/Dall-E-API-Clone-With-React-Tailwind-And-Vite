import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import dalleRoutes from './routes/dalleRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async(req, res) => {
  res.send('Hello,This works');
})

const startServer = async () => {

  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () => console.log('Server Run in http://localhost:8080'))
  } catch(error) {
    console.log(error);addEventListener
  }
}

startServer();