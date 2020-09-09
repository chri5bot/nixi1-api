import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const MessageSchema = new Schema(
  {
    text: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
  },
  {
    collection: 'messages',
  }
);

MessageSchema.plugin(timestamps);

MessageSchema.index({ createdAt: 1, updatedAt: 1 });

export const Message = mongoose.model('Message', MessageSchema);
export const MessageTC = composeWithMongoose(Message);
