import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import Navigation from './Navigation';
import { SafeAreaProvider, SafeAreaView, Text } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),

  });

  if (!fontsLoaded) {
    // Return a loading indicator or some placeholder content
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

