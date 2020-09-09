import mongoose from 'mongoose';
import { MONGODB_URI } from '../config';

mongoose.Promise = global.Promise;

const connection = mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);

connection
  .then((db) => db)
  .catch((err) => {
    console.log(err);
  });

export default connection;
