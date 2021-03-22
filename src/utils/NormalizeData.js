import { schema } from 'normalizr';

const userEntity = new schema.Entity('users');

const commentEntity = new schema.Entity('comments', {
  commenter: user
});

export const articleEntity = new schema.Entity('articles', {
  author: userEntity,
  comments: [commentEntity]
});

const originalData = {
  "id": "4532",
  "author": {
    "id": "14543",
    "name": "Lukasz"
  },
  "title": "This is a title!",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "666",
        "name": "Maciek"
      }
    }
  ]
}

