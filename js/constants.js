export const Photos = {
  MIN_PHOTOS: 1,
  MAX_PHOTOS: 25,
  MIN_AVATAR_PHOTOS: 1,
  MAX_AVATAR_PHOTOS: 6
};

export const Comments = {
  MIN_COMMENTS_ID: 1,
  MAX_COMMENTS_ID: 25,
  MIN_COMMENTS: 0,
  MAX_COMMENTS: 30
};

export const Posts = {
  MIN_ID: 1,
  MAX_ID: 25,
  MIN_LIKES: 15,
  MAX_LIKES: 200,
  MAX_POSTS: 25
};

export const COMMENTS_PORTION = 5;

export const MAX_HASHTAG = 5;

export const REGULAR_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

export const ErrorMessage = {
  INVALID_HASHTAG_COUNT: `Максимальное число хештегов &mdash; ${MAX_HASHTAG} символов`,
  INVALID_HASHTAG_PATTERN: 'Хештег(и) составлен(ы) неправильно',
  NON_UNIQUE_HASHTAG: 'Соблюдайте уникальность при составлении ваших хештегов!'
};

export const SCALE_STEP = 25;

export const MIN_SCALE = 25;

export const MAX_SCALE = 100;

export const DEFAULT_SCALE = 100;

export const Effects = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

export const DEFAULT_EFFECT = Effects[0];
