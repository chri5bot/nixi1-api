import { gql } from 'apollo-server-express';

export default gql`
  type Message {
    id: String!
    text: String!
  }
  input createMessageInput {
    id: String!
    text: String!
  }
  extend type Mutation {
    createMessage(input: createMessageInput): Message
  }
  extend type Subscription {
    messageCreated: Message
  }
  extend type Query {
    messages: [Message]
  }
`;
