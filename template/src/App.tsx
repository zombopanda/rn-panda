import React from 'react';
import Loading from 'Loading';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'mobx-react';
import store from 'stores/Store';

enableScreens();

const App = () => {
  SplashScreen.hide();

  return (
    <Provider store={store}>
      <Loading />
    </Provider>
  );
};

export default App;
