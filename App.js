import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigation';
import { SafeAreaProvider, SafeAreaView, Text } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify'; // Import Auth from aws-amplify

// Configure Amplify
Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_kjX39z76G',
    userPoolWebClientId: '6dgttjph9mm7498l201kn422th',
  },
});

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

