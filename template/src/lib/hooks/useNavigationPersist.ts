import React, { useCallback, useState } from 'react';
import { Linking, Platform } from 'react-native';
import { InitialState, NavigationState } from '@react-navigation/routers';
import AsyncStorage from '@react-native-community/async-storage';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export const cleanNavigation = () => AsyncStorage.removeItem(PERSISTENCE_KEY);

export default (): [boolean, InitialState | undefined, (state?: NavigationState) => void] => {
  const [isReady, setIsReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState>();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState().then();
    }
  }, [isReady]);

  const onStateChange = useCallback((state?: NavigationState) => (
    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))),
  []);

  return [isReady, initialState, onStateChange];
};
