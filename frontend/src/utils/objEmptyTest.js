
export const objEmptyTest = (obj) => {
  return (obj && Object.keys(obj).length === 0) ?? true;
}