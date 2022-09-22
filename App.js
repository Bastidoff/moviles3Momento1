
import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner';
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Banner></Banner>
      <Body></Body>
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
