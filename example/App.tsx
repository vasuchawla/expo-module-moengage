import { StyleSheet, Text, View } from 'react-native';

import * as ExpoMoengage from 'expo-moengage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoMoengage.hello()}</Text>
    </View>
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
