export const convertFileToFront = (filename = '') => {
  let tmpArray = filename.split('.');
  tmpArray.pop();
  if (tmpArray.length) {
    return tmpArray.join('.');
  }
  return filename;
}

export const convertFrontToFile = (front= '') => {
  return `${front}.md`;
}