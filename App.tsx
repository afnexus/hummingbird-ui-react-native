import { nNeutrals } from '@afnexus/hummingbird-ui-assets';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Appbar,
  Button,
  DataTable,
  Provider as PaperProvider,
  Surface,
} from 'react-native-paper';

import { HummingbirdProvider } from './src/components/HummingBirdProvider';

export default function App() {
  return (
    <HummingbirdProvider darkMode>
      <Surface>
        <View>
          <Surface elevation={4}>
            <Appbar.Header>
              <Appbar.BackAction onPress={() => {}} />
              <Appbar.Content title="Title" />
              <Appbar.Action icon="calendar" onPress={() => {}} />
              <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
          </Surface>
          <Text
            style={{
              fontFamily: 'lato-regular',
            }}>
            Open up App.tsx to start working on your app!
          </Text>
          <View style={styles.container}>
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
          <Surface>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Dessert</DataTable.Title>
                <DataTable.Title numeric>Calories</DataTable.Title>
                <DataTable.Title numeric>Fat</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
                <DataTable.Cell numeric>6.0</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
                <DataTable.Cell numeric>8.0</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Surface>
        </View>
      </Surface>
    </HummingbirdProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
