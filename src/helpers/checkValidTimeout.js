export const checkValidTimeout = (ms) => {
  // Defined as the maximum delay allowed on setTimout, a 32-bit signed integer.
  const MAX_DELAY_VALUE_MS = 2147483647;
  if (ms <= MAX_DELAY_VALUE_MS) return true;
  return false;
};
