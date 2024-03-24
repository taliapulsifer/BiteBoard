import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import Navigation from './Navigation'; // Make sure this is the correct path to Navigation.js
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider> 
  );
}