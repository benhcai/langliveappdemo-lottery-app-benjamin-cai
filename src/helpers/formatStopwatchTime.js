export const formatTime = (ms) => {
  return new Date(ms).toISOString().substring(11, 19);
};
