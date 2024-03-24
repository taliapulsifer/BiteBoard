// ProfileHeader.js

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import colors from './colors';
import CustomText from './customText';

const ProfileHeader = ({ name, reviews, eats }) => (
  <View style={styles.headerContainer}>
    <Image style={styles.profilePicture} source={{ uri: 'profile_picture_url' }} />
    <CustomText style={styles.nameText}>{name}</CustomText>
    <View style={styles.statsContainer}>
      <CustomText style={styles.statsText}>{reviews} Reviews</CustomText>
      <CustomText style={styles.statsText}>{eats} Eats</CustomText>
    </View>
    <TouchableOpacity style={styles.friendButton}>
      <CustomText style={styles.friendButtonText}>FOLLOW</CustomText>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.accentTertiary,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsContainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  statsText: {
    fontSize: 16,
  },
  friendButton: {
    backgroundColor: colors.accentSecondary,
    padding: 10,
    borderRadius: 5,
  },
  friendButtonText: {
    color: 'white',
  },
});

export default ProfileHeader;
