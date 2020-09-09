import { Message } from '../../models/message';

export default async (_, args) => await Message.find({}).exec();
