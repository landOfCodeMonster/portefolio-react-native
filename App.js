import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home, HomeTest } from './src/screen';


export default function App() {
  return (
     <SafeAreaView style={{ flex: 1}}>
        <HomeTest />
     </SafeAreaView>
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
