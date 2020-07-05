import React, { FC } from 'react';
import { inject, IWrappedComponent } from 'mobx-react';
import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { Store } from 'stores/Store';

export type StackParamList = {
  Home: undefined;
  Settings: undefined;
};

export interface Route<T extends keyof StackParamList> {
  route: RouteProp<StackParamList, T>;
}

export interface Navigation<T extends keyof StackParamList> {
  navigation: StackNavigationProp<StackParamList, T>;
}

export interface StoreProps { store: Store }
export interface BaseProps extends StoreProps {}

export type BaseNavigationProps<T extends keyof StackParamList> = Route<T> & Navigation<T>;
export type NavigationProps<T extends keyof StackParamList> = BaseProps & BaseNavigationProps<T>;
export type ScreenRouteProp<T extends keyof StackParamList> = RouteProp<StackParamList, T>;
export type ScreenNavigationProp<T extends keyof StackParamList> = StackNavigationProp<StackParamList, T>;

export type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer R> ? Array<NestedPartial<R>> : NestedPartial<T[K]>
};

export type Unpacked<T> = T extends (infer U)[] ? U : T;
export type Subtract<T, K> = Omit<T, keyof K>;

export const withStores = <TStoreProps extends keyof StoreProps>(...stores: TStoreProps[]) => (
  <TProps extends Pick<StoreProps, TStoreProps>>(component: React.ComponentType<TProps>) => (
    (inject(...stores)(component) as any) as
      FC<Subtract<TProps, Pick<StoreProps, TStoreProps>> &
      Partial<Pick<StoreProps, TStoreProps>>> &
      IWrappedComponent<TProps>
  ));
