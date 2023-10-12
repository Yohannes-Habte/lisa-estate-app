import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import colors from 'colors';

// Routers
import userRouter from './routes/userRoutes.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port =  5000;

// Security key holder
dotenv.config();

// Connect to DB
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log('Connected to MongoDB!'.yellow.bold);
  })
  .catch((err) => {
    console.log(err);
  });

// End points
app.use('/api/users', userRouter);

// Global error handler
app.use(globalErrorHandler);

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${port}`.blue.bold);
});
