import Navigation from 'components/Navigation';

import { BaseProps, withStores } from 'lib/types/types';
import React, {
  FC, useEffect,
} from 'react';
import { observer } from 'mobx-react';

const Loading: FC<BaseProps> = ({ store, store: { user } }) => {
  useEffect(() => {
    store.subscribe().then();

    return store.unsubscribe;
  }, [store]);

  // if (!user.isAuthenticated) {
  //   return <SplashScreen />;
  // }

  return <Navigation />;
};

export default withStores('store')(observer(Loading));
