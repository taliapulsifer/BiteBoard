import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import colors from '../components/colors';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(email, password);
  };

  async function signUp(password, email) {
    try {
    await Auth.signUp({
    username,
    password,
    attributes: {
    email,
    }
    });
    console.log('Signed up successfully');
    
    // After signing up, create user profile
    await createUser(password, email);
    } catch (error) {
    console.log('Error signing up:', error);
    }
    }

return (
    <View style={styles.container}>

      {/* Logo and Title */}
      <View style={styles.logoContainer}>
      <Text><Octicons name="bold" size={50} color="black" /></Text>
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
        <TouchableOpacity style={styles.buttonSignUp} onPress={ () =>signUp(password, email)}>
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

export default LoginPage;