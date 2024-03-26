import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ style, ...props }) => (
  <Text {...props} style={[styles.defaultStyle, style]} />
);

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Poppins',
  },
});

export default CustomText;
