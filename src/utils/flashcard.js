export const convertFileToFront = (filename = '') => {
  let tmpArray = filename.split('.');
  tmpArray.pop();
  return tmpArray.join('.');
}