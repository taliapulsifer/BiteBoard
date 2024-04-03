import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

// Assuming colors is a valid import that provides color values
import colors from '../components/colors';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>

      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🍴</Text>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      {/* Email and Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonSignUp} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    fontFamily: 'PoppinsMedium',
    fontSize: 24,
    marginBottom: 24,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: colors.accentTertiary,
    borderRadius: 20,
    padding: 20,
  },
  input: {
    fontFamily: 'Poppins',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonSignUp: {
    backgroundColor: colors.accentPrimary,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#fff',
  },
});

export default Signup;
