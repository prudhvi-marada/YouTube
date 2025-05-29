import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouters from './routes/authRoutes.js';
import channelRouters from './routes/channelRoutes.js';
import commentRouters from './routes/commentRoutes.js';
import videoRouters from './routes/videoRoutes.js';
import userRouter from './routes/userRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouters);
app.use('/api/videos', videoRouters);
app.use('/api/comments', commentRouters);
app.use('/api/channels', channelRouters);
app.use('/api/user', userRouter);



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDb Atlas");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);  // Changed to use the locally defined PORT variable
    });
  })
  .catch((e) => {
    console.log("Failed to Connect to DataBase", e);
  });
