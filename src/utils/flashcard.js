export const convertFileToFront = (filename = '') => {
  let tmpArray = filename.split('.');
  tmpArray.pop();
  return tmpArray.join('.');
}

export const convertFrontToFile = (front= '') => {
  return `${front}.md`;
}