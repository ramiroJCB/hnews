import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type articlesDocument = articles & Document;

@Schema()
export class articles {
  @Prop()
  _id: ObjectId;
  @Prop()
  created_at: string;
  @Prop()
  title: string;
  @Prop()
  url: string;
  @Prop()
  author: string;
  @Prop()
  points: string;
  @Prop()
  story_text: string;
  @Prop()
  comment_text: string;
  @Prop()
  num_comments: number;
  @Prop()
  story_id: number;
  @Prop()
  story_title: string;
  @Prop()
  story_url: string;
  @Prop()
  parent_id: number;
  @Prop()
  created_at_i: number;
  @Prop()
  _tags: [];
  @Prop()
  objectID: string;
  @Prop()
  _highlightResult: any;
  @Prop({ defaultValue: false })
  _ignored: boolean;
}

export const articlesSchema = SchemaFactory.createForClass(articles);
