/* eslint-disable class-methods-use-this */
import AsyncStorage from '@react-native-community/async-storage';
import { $appState, $netInfo } from 'lib/helpers/reactive';
import { bindAll } from 'lodash-decorators';
import { AsyncTrunk, ignore } from 'mobx-sync';
import { AppState, AppStateStatus } from 'react-native';
import {
  combineLatest, from, Subscription,
} from 'rxjs';
import {
  debounceTime, delayWhen, filter, map, startWith,
} from 'rxjs/operators';
import User from 'stores/User';

@bindAll()
export class Store {
  @ignore loaded: Promise<void>;

  @ignore trunk?: AsyncTrunk;

  @ignore subscription?: Subscription;

  user = new User();

  constructor() {
    this.loaded = this.init().then(() => console.log('store loaded'));
  }

  async init() {
    const trunk = new AsyncTrunk(this, {
      storage: AsyncStorage,
      storageKey: 'mobx-store',
      delay: 500,
    });
    await trunk.init();
    this.trunk = trunk;
  }

  async subscribe() {
    await this.loaded;

    this.subscription = combineLatest([
      $appState.pipe(startWith(AppState.currentState), filter((e) => e === 'active')),
      $netInfo.pipe(map((event) => !!(event.isConnected && event.isInternetReachable)), filter((e) => e)),
    ]).pipe(delayWhen(() => from(this.loaded)), debounceTime(2000)).subscribe(this.onChangeState);
  }

  unsubscribe() {
    this.subscription?.unsubscribe();
  }

  async onChangeState([appState, isConnected]: [AppStateStatus, boolean]) {
    console.log('loaded');
  }
}

const store = new Store();

export default store;
