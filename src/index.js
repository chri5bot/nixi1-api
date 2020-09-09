import { createServer } from 'http';
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
import { PORT } from './config';
import schema from './schema';
import mongoose from 'mongoose';
import './utils/db';

export const pubsub = new PubSub();

const app = express();

const server = new ApolloServer({
  schema,
  cors: true,
  playground: process.env.NODE_ENV === 'development' ? true : false,
  introspection: true,
  tracing: true,
  path: '/',
});

server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () =>
    new Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve();
      } else {
        reject();
      }
    }),
});

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

app.get('/', async (req, res) => {
  const thing = await Promise.resolve({ one: 'two' }) // async/await!
    .catch((e) => res.json({ error: e.message }));
  return res.json({ ...thing, hello: 'world' }); // object-rest-spread!
});

httpServer.listen(PORT, () => {
  console.log(
    `> Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `> Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
