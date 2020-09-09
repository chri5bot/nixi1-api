import { createServer } from 'http';
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
import { PORT } from './config';
import schema from './schema';

export const pubsub = new PubSub();

const app = express();

const server = new ApolloServer({
  schema,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
});

server.applyMiddleware({ app });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

app.get('/', async (req, res) => {
  const thing = await Promise.resolve({ one: 'two' }) // async/await!
    .catch((e) => res.json({ error: e.message }));
  return res.json({ ...thing, hello: 'world' }); // object-rest-spread!
});

httpServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `> Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  // eslint-disable-next-line no-console
  console.log(
    `> Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
