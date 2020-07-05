export const trim = (string: string, length = 20) => (
  string && string.length > length
    ? `${string.substring(0, length)}...`
    : string);

export const roundTo = (places: number, num: number) => (
  +(`${Math.round(Number(`${num}e+${places}`))}e-${places}`));

export const roundToOne = (num: number) => roundTo(1, num);

export const wait = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));

// eslint-disable-next-line no-restricted-globals
export const notNumber = (value: any) => isNaN(Number(value));

const getKeys = <T extends {}>(o: T): Array<keyof T> => <Array<keyof T>>Object.keys(o);

// Turn enum into array
export const enumKeys = <T>(enumme: T): (keyof T)[] => getKeys(enumme).filter(notNumber);
