import { Schema } from 'mongoose';

export const TechsNewsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  body: String,
  created_at: Date,
});
