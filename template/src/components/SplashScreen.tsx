import React, {
  FC,
} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  text: {
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0,
    color: '#fff',
    textAlign: 'center',
  },
});

const SplashScreen: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading</Text>
  </View>
);

export default SplashScreen;
