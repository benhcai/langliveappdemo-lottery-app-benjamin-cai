export const getRandomId = (list) => {
  const min = 0;
  const max = list.length - 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
