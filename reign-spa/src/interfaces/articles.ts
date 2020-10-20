export interface IArticles {
  _id: string;
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

  _highlightResult: { [key: string]: any };
}
