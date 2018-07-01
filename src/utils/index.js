import queryString from 'query-string';

export const isEmptyObj = (obj) => {
  if (!Object.getOwnPropertyNames(obj).length) {
    return true;
  }
  return false;
}

// used Fisher Yates_shuffle algorighm for shuffling
// referenced https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

export const shuffleArray = (array) => {
  if(!Array.isArray(array)) {
    array = Object.keys(array).map((cur) => array[cur]);
  }
  let cnt = array.length;
  while (cnt > 0) {
      let idx = Math.floor(Math.random() * cnt);
      cnt--;
      [array[cnt], array[idx]] = [array[idx], array[cnt]];
  }
  return [...array];
}

export const encodeURI = (url = '') => encodeURIComponent(url);
export const decodeURI = (url = '') => decodeURIComponent(url);
export const parseURIQuery = (url = '') => queryString.parse(url);