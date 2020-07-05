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

export function promisifyNode<T>(f: (cb: (err: any, res: T) => void) => void, thisContext?: any): () => Promise<T>;
export function promisifyNode<A, T>(f: (arg: A, cb: (err: any, res: T) => void) => void, thisContext?: any): (arg: A) => Promise<T>;
export function promisifyNode<A, A2, T>(f: (arg: A, arg2: A2, cb: (err: any, res: T) => void) => void, thisContext?: any): (arg: A, arg2: A2) => Promise<T>;

export function promisifyNode(f: any, thisContext?: any) {
  return function (...args: any[]) {
    return new Promise((resolve, reject) => {
      args.push((err: any, result: any) => (err !== null ? reject(err) : resolve(result)));
      f.apply(thisContext, args);
    });
  };
}
