export const checkValidDate = (ms) => {
  // ECMA-262 defines the maximu date as +-100,000,000
  const ECMA262_MAX_DAYS = 100000000;
  const ECMA262_MAX_MS = ECMA262_MAX_DAYS * 24 * 60 * 60 * 1000;
  console.log(ECMA262_MAX_MS);
  if (ms > ECMA262_MAX_MS) return false;
  return true;
};
