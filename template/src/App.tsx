import React from 'react';
import Loading from 'Loading';
import { enableScreens } from 'react-native-screens';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'mobx-react';
import store from 'stores/Store';

enableScreens();

const App = () => {
  RNBootSplash.hide({ duration: 250 });

  return (
    <Provider store={store}>
      <Loading />
    </Provider>
  );
};

export default App;
