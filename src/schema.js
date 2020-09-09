import { makeExecutableSchema, gql } from 'apollo-server-express';
import { merge } from 'lodash';

import Message from './types/Message';

import MessageQueries from './queries/message';

import MessageMutations from './mutations/message';

import MessageSubscriptions from './subscriptions/message';

const Root = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

const resolvers = merge(
  {},

  MessageQueries,

  MessageMutations,

  MessageSubscriptions
);

const schema = makeExecutableSchema({
  typeDefs: [Root, Message],
  resolvers,
});

export default schema;
