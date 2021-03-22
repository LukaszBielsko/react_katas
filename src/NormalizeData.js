import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const comment = new schema.Entity('comments', {
  commenter: user
});

const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});

export const normalizeArticle = (originalData) => {

}

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

export const normalizedData = normalize(originalData, article);
