import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import CustomText from '../../components/customText';
import colors from '../components/colors';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        {/* Replace with Image component if you have a logo image */}
        <CustomText style={styles.logo}>🍴</CustomText>
        <CustomText style={styles.title}>BiteBoard</CustomText>
      </View>
      
      {/* Login/Sign Up buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLogin}>
          <CustomText style={styles.buttonText}>Log In</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp}>
          <CustomText style={styles.buttonText}>Sign Up</CustomText>
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
          <CustomText style={styles.buttonText}>Log In</CustomText>
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
  logo: {
    fontSize: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonLogin: {
    backgroundColor: colors.accentSecondary,
    padding: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  buttonSignUp: {
    backgroundColor: colors.accentPrimary,
    padding: 20,
    borderRadius: 10,
    marginLeft: 5,
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
  buttonSignIn: {
    backgroundColor: colors.accentPrimary,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  }
});

export default LoginPage;
