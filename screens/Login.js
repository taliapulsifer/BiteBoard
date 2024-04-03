import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import colors from '../components/colors';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        {/* Replace with Image component if you have a logo image */}
        <Text><Octicons name="bold" size={50} color="black" /></Text>
        <Text style={styles.title}>Log In</Text>
      </View>
      
      {/* Login/Sign Up buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUpText}>Don't have an account? Click to sign up!</Text>
        </TouchableOpacity>
      </View>

      {/* Email and Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonSignIn} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontFamily: 'PoppinsMedium',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: 200,
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  inputContainer: {
    width: '80%',
    backgroundColor: colors.accentTertiary,
    borderRadius: 20,
    padding: 20,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Note: boxShadow is not supported in React Native, you would need to use elevation for Android
  },
  input: {
    fontFamily: 'Poppins',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  signUpText: {
    fontFamily: 'Poppins',
    color: colors.accentPrimary,
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  buttonSignIn: {
    backgroundColor: colors.accentPrimary,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#fff',
  }
});

export default LoginPage;
