import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
export declare type articlesDocument = articles & Document;
export declare class articles {
    _id: ObjectId;
    created_at: string;
    title: string;
    url: string;
    author: string;
    points: string;
    story_text: string;
    comment_text: string;
    num_comments: number;
    story_id: number;
    story_title: string;
    story_url: string;
    parent_id: number;
    created_at_i: number;
    _tags: [];
    objectID: string;
    _highlightResult: any;
    _ignored: boolean;
}
export declare const articlesSchema: import("mongoose").Schema<any>;
