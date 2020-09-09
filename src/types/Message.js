import { gql } from 'apollo-server-express';

export default gql`
  type Message {
    text: String!
  }
  input createMessageInput {
    text: String!
  }
  extend type Mutation {
    createMessage(input: createMessageInput): String
  }
  extend type Subscription {
    messageCreated: Message
  }
  extend type Query {
    messages: [Message]
  }
`;
