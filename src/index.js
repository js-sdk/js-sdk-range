export const charLowerRange = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
export const charUpperRange = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
export const charNumberRange = ['0'.charCodeAt(0), '9'.charCodeAt(0)];

export const between = (value, lower, higher) =>
  value >= lower && value <= higher;

export const rangeIn = (start, end, range) =>
  between(start, range[0], range[1]) &&
  between(end, range[0], range[1]);

export const rangeImpl = (start, end, step, f) => {
  const length = end - start;
  if (length == 0 || step == 0) { return []; }
  const steps = Math.round(length / step);
  const elements = step > 1 ? (length - steps) : steps;
  const ls = new Array(elements);
  for (let i = 0; i < length && i <= elements; i++) {
    ls[i] = f((i * step) + start);
  }
  return ls;
};

export const rangeChar = (start, end) => {
  let x = start.charCodeAt(0);
  let y = end.charCodeAt(0);
  let ok = rangeIn(x, y, charLowerRange) ||
      rangeIn(x, y, charUpperRange) ||
      rangeIn(x, y, charNumberRange);
  return ok ? rangeImpl(x, y + 1, 1, String.fromCharCode) : [];
};

export const rangeStep = (start, end, step) =>
  rangeImpl(start, end, step, x => x);

export const range = (start, end) =>
  rangeImpl(start, end, 1, x => x);

export const rangeInclStep = (start, end, step) =>
  rangeStep(start, end + 1, step);

export const rangeIncl = (start, end) =>
  range(start, end + 1, 1);
