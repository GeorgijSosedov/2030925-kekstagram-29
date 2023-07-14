import {Posts, Photos} from './constants.js';
import {getRandomArrayElement, getRandomIdFromRange, getRandomInteger} from './functions.js';
import {mockComments, mockDescriptions} from './mocks.js';

const postPhotos = getRandomIdFromRange(Photos.MIN_PHOTOS, Photos.MAX_PHOTOS);
const idPost = getRandomIdFromRange(Posts.MIN_ID,Posts.MAX_ID);
const createPost = () => (
  {
    id: idPost(),
    url:  `photos/${postPhotos()}.jpg`,
    description: getRandomArrayElement(mockDescriptions),
    likes: getRandomInteger(Posts.MIN_LIKES, Posts.MAX_LIKES),
    comments: getRandomArrayElement(mockComments)
  }
);

export const createMorePosts = () => Array.from({length: Posts.MAX_POSTS}, createPost);