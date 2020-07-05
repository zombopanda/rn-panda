import SplashScreen from 'components/SplashScreen';
import { t } from 'lib/i18n';
import React, { FC } from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StatusBar, StyleSheet,
} from 'react-native';
import { StackParamList } from 'lib/types/types';
import HomeScreen from 'screens/HomeScreen';
import SettingsScreen from 'screens/SettingsScreen';

import useNavigationPersist from '../lib/hooks/useNavigationPersist';
import { Home, Settings } from './icons';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator<StackParamList>();

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.7,
  },
});

const Tabs = ({ navigation, route }: StackScreenProps<StackParamList>) => (
  <Tab.Navigator tabBarOptions={{
    activeTintColor: '#000000',
    inactiveTintColor: '#00000050',
    style: {
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2,
      width: 'auto',
    },
    labelStyle: {
      fontSize: 14,
    },
  }}
  >
    <Tab.Screen
      name="HomeStack"
      options={{
        tabBarLabel: t('Hello world'),
        // @ts-ignore
        tabBarIcon: ({ focused }) => <Home width={28} height={28} style={!focused && styles.opacity} />,
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="SettingsStack"
      options={{
        tabBarLabel: t('Settings'),
        // @ts-ignore
        tabBarIcon: ({ focused }) => <Settings width={28} height={28} style={!focused && styles.opacity} />,
      }}
      component={SettingsScreen}
    />
  </Tab.Navigator>
);

const Navigation: FC = () => {
  const [isReady, initialState, onStateChange] = useNavigationPersist();

  console.log('render navigation');

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        initialState={initialState}
        onStateChange={onStateChange}
      >
        <StatusBar barStyle="light-content" />
        <HomeStack.Navigator screenOptions={{
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 24,
            letterSpacing: 0,
          },
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerRightContainerStyle: { paddingRight: 16 },
          cardStyle: { backgroundColor: '#fff' },
        }}
        >
          <HomeStack.Screen
            name="Home"
            component={Tabs}
            options={{ title: t('Hello world') }}
          />
          <HomeStack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: t('Settings') }}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
