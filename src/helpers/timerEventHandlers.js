export const onFocusHandler = (prop, setter) => {
  if (prop === "00") setter("");
};

export const onBlurHandler = (prop, setter) => {
  if (prop === "") setter("00");
};
