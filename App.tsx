import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme/commonTheme';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    LatoRegular: require('./assets/fonts/LatoRegular.ttf'),
    LatoBold: require('./assets/fonts/LatoBold.ttf'),
  });

  if (!fontsLoaded) return <></>;

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          test
        </Button>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          test
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
