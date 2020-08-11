import { map } from 'lodash/fp';

type Argument<T> = T extends (arg: infer U, callback: unknown) => any ? U : any;
type Callback<T> = T extends (arg: unknown, callback: infer X) => any ? X : any;

export const promisify = <
  S extends(arg: Argument<S>, callback: Callback<S>) => void
  >(fn: S): (arg: Argument<S>) => Promise<Argument<Callback<S>>> => (
    arg => new Promise((resolve, reject) => {
      try {
        const callback = (d: Argument<Callback<S>>) => resolve(d);
        fn(arg, callback as Callback<typeof fn>);
      } catch (e) {
        reject(e);
      }
    })
  );

export const mapPromisify = map(promisify);

// eslint-disable-next-line max-len
export function promisifyNode<A extends readonly unknown[], T>(f: (...args: [...A, (err: any, res: T) => void]) => void, thisContext?: any): (...args: [...A]) => Promise<T>;

export function promisifyNode(f: any, thisContext?: any) {
  return (...args: any[]) => (
    new Promise((resolve, reject) => {
      args.push((err: any, result: any) => (err !== null ? reject(err) : resolve(result)));
      f.apply(thisContext, args);
    })
  );
}
