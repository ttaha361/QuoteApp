import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import IndexPage from './components';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.headerText}>Quote Generator</Text>
      <IndexPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102C57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize:26,
    color:'#DAC0A3'
  }
});
