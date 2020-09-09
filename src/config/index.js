import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://chris:WAneUWcKpx6qo81|@cluster0.284ov.mongodb.net/nixi1?retryWrites=true&w=majority';
export const USER = process.env.USER || '';
export const PASSWORD = process.env.PASSWORD || '';
export const JWT_SECRET = process.env.JWT_SECRET || '';
