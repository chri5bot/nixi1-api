import { pubsub } from '../../index';
import MESSAGE_CREATED from '../../topics/message/index';

export default {
  subscribe: () => pubsub.asyncIterator([MESSAGE_CREATED]),
};
