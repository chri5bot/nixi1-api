import express from 'express';
import { PORT } from './config';

const app = express();

app.get('/', async (req, res) => {
  const thing = await Promise.resolve({ one: 'two' }) // async/await!
    .catch((e) => res.json({ error: e.message }));
  return res.json({ ...thing, hello: 'world' }); // object-rest-spread!
});

app.listen({ port: PORT }, () => {
  console.log(`> Server ready at ${PORT}`);
});
