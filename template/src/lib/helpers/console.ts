const times: {[key: string]: number} = {};
// @ts-ignore
console.time = (label: string): void => {
  times[label] = Date.now();
};

// @ts-ignore
console.timeEnd = (label: string): void => {
  const time = times[label];
  if (!time) {
    throw new Error(`No such label: ${label}`);
  }
  console.log(`[${Date.now() - time}ms] ${label}`);
};

console.disableYellowBox = true;
