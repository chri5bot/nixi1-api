import { createServer } from 'http';
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
import { PORT, JWT_SECRET } from './config';
import schema from './schema';
import mongoose from 'mongoose';
import './utils/db';
import jwt from 'jsonwebtoken';

export const pubsub = new PubSub();

const app = express();

const server = new ApolloServer({
  schema,
  cors: true,
  playground: process.env.NODE_ENV === 'development' ? true : false,
  introspection: true,
  tracing: true,
  path: '/',
  context: async ({ req, connection }) => {
    if (connection) {
      return connection.context;
    }
    const token = req.headers.authorization;

    if (!token) {
      return;
    }

    const user = await new Promise((resolve, reject) => {
      if (!JWT_SECRET) {
        return;
      }
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
          return reject(err);
        }

        resolve(decoded.username);
      });
    });

    return { user };
  },
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
