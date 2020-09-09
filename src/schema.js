import { makeExecutableSchema, gql } from 'apollo-server-express';
import { merge } from 'lodash';

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

const resolvers = merge({});

const schema = makeExecutableSchema({
  typeDefs: [Root],
  resolvers,
});

export default schema;
