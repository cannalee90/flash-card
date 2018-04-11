import queryString from 'query-string';

export const isEmptyObj = (obj) => {
  if (!Object.getOwnPropertyNames(obj).length) {
    return true;
  }
  return false;
}

export const encodeURI = (url = '') => encodeURIComponent(url);
export const decodeURI = (url = '') => decodeURIComponent(url);
export const parseURIQuery = (url = '') => queryString.parse(url);