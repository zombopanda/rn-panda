import { inject, observer } from 'mobx-react';
import React, { FC } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { NavigationProps } from 'lib/types/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SettingsScreen: FC<NavigationProps<'Settings'>> = ({ store, navigation }) => (
  <View style={styles.container}>
    <Text>Settings screen</Text>
  </View>
);

export default inject('store')(observer(SettingsScreen));
