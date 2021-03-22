import { schema } from 'normalizr';

const userEntity = new schema.Entity('users');

const commentEntity = new schema.Entity('comments', {
  commenter: user
});

export const articleEntity = new schema.Entity('articles', {
  author: userEntity,
  comments: [commentEntity]
});
