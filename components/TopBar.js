import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import colors from './colors';

const TopBar = ({ navigation }) => {
  return (
    <View style={styles.topNavContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Octicons name="arrow-left" size={26} color={colors.textPrimary} />
      </TouchableOpacity>

      {/* Space filler to push the hamburger to the right */}
      <View style={{ flex: 1 }} />

      <TouchableOpacity style={styles.hamburgerButton} onPress={() => {/* Handle menu opening logic here */}}>
        <Octicons name="three-bars" size={26} color={colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topNavContainer: {
    backgroundColor: colors.background,
    height: 60,
    width: '100%',
    flexDirection: 'row', // This ensures items are aligned horizontally
    alignItems: 'center', // This centers items vertically in the container
    paddingHorizontal: 20, // Add some padding on the sides
  },
  backButton: {
  },
  hamburgerButton: {
  },
});

export default TopBar;
