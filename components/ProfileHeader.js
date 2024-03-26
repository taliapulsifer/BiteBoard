// ProfileHeader.js

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import colors from './colors';
import CustomText from './customText';

const ProfileHeader = ({ name, reviews, eats }) => (
  <View style={styles.whiteBackground}>
    <View style={styles.headerContainer}>
      <Image
        style={styles.profilePicture}
        source={{ uri: 'profile_picture_url' }}
        accessible={true}
        accessibilityLabel="Profile picture"
      />
      <CustomText style={styles.nameText} accessibilityRole="header">
        {name}
      </CustomText>
      <View style={styles.statsContainer}>
        <CustomText style={styles.statsText}>
          {eats} Eats
        </CustomText>
        <CustomText style={styles.statsText}>
          {reviews} Reviews
        </CustomText>
        <TouchableOpacity
          style={styles.friendButton}
          accessible={true}
          accessibilityLabel="Follow"
          accessibilityRole="button"
          accessibilityHint="Double tap to follow the user"
        >
          <CustomText style={styles.friendButtonText}>FOLLOW</CustomText>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.navBarContainer}>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Activity"
        accessibilityRole="button"
      >
        <CustomText style={styles.navBarText}>Activity</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Photos"
        accessibilityRole="button"
      >
        <CustomText style={styles.navBarText}>Photos</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Reviews"
        accessibilityRole="button"
      >
        <CustomText style={styles.navBarText}>Reviews</CustomText>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    },
  navBarText: {
      fontSize: 20,
      color: colors.textPrimary,
  },
  whiteBackground: {
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
},
  headerContainer: {
    backgroundColor: colors.background,
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
  },
  statsContainer: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 30,
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
