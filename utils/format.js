export const capitalize = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

export const toOneFloatPoint = (val) => {
  return Number(val.toFixed(1));
};
