import jwt from 'jsonwebtoken';
import { USER, PASSWORD, JWT_SECRET } from '../../config';

export default (_, args) => {
  const { username, password } = args.input;

  if (username !== USER || password !== PASSWORD) {
    return;
  }

  if (!JWT_SECRET) {
    return;
  }

  const token = jwt.sign({ username }, JWT_SECRET, {});

  return { token };
};
