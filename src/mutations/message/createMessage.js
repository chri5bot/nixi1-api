import MESSAGE_CREATED from '../../topics/message/index';
import { pubsub } from '../../index';
import { Message } from '../../models/message';

export default async (_, args) => {
  try {
    const { text } = await args.input;
    await Message.create({ text });
    await pubsub.publish(MESSAGE_CREATED, { messageCreated: { text } });
    return 'success';
  } catch (e) {
    return e.message;
  }
};
