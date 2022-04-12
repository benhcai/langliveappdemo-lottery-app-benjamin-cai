export const twoDigits = (num) => {
  num = parseInt(num);
  if (isNaN(num)) return "";
  if (num < 10) return String(`0${num}`);
  return String(num);
};
