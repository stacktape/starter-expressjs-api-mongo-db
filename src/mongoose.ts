import { connect, Schema, model } from 'mongoose';

export const connectMongoose = async () => {
  await connect(process.env.STP_MONGO_DB_CLUSTER_CONNECTION_STRING!, {
    authMechanism: 'MONGODB-AWS',
    authSource: '$external',
    dbName: process.env.DATABASE_NAME
  });
  console.info('Successfully connected to the MongoDB cluster.');
};

type Post = {
  title: string;
  content: string;
  authorEmail: string;
};

const PostSchema = new Schema<Post>(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    authorEmail: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const Post = model<Post>('Post', PostSchema);
