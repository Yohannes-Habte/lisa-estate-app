import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import colors from 'colors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port = process.env.PORT || 5000;

// Security key holder
dotenv.config();

app.get("/tes", (req, res) => {
  res.send("Hello guys")
})
// Connect to DB
mongoose.connect(process.env.MONGODB).then(() => {
    console.log("Connected to MongoDB!".yellow.bold)
}).catch((err) => {
    console.log(err).red
})

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${port}`.blue.bold);
});