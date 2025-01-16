import express, { Request, Response } from 'express';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';
import router from './routes';

const app = express();
const PORT = 8080;

const {
  MONGODB_ATLAS_USERNAME,
  MONGODB_ATLAS_PASSWORD,
  MONGODB_ATLAS_DBNAME
} = process.env;

const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.lhvex.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(cors());
app.use(router);

mongoose.set('useFindAndModify', true);
mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(PORT, () => {
      console.info(`App us listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });
