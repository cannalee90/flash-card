export const isEmptyObj = (obj) => {
  if (!Object.getOwnPropertyNames(obj).length) {
    return true;
  }
  return false;
}