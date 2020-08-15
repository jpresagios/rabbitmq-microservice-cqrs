import { Document } from 'mongoose';

export interface SportNews extends Document {
  readonly _id: string;
  readonly title: string;
  readonly body: string;
  readonly created_at: Date;
}
