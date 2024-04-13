import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import colors from './colors';
import globalStyles from './GlobalStyles';
import images from '../assets/images/images';

const ProfileHeader = ({ name, reviews, eats }) => {
  const [followed, setFollowed] = useState(false);

  const getImageSource = (image) => {
    if (typeof image === 'number') {
      return image;
    }
    return { uri: image };
  };

  const imageUri = images.pfp1;

  const toggleFollow = () => {
    setFollowed(!followed);
  };

  return (
    <View style={styles.whiteBackground}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.profilePicture}
          source={getImageSource(imageUri)}
          accessible
          accessibilityLabel={`${name}'s profile picture`}
          accessibilityRole="image"
        />
        <Text 
          style={styles.nameText} 
          accessible 
          accessibilityRole="header" 
          accessibilityLabel={`Profile name: ${name}`}
        >
          {name}
        </Text>
        <View style={styles.statsContainer}>
          <Text 
            style={styles.statsText} 
            accessible 
            accessibilityLabel={`${eats} total eats`}
            accessibilityRole="text"
          >
            {eats} Eats
          </Text>
          <Text 
            style={styles.statsText} 
            accessible 
            accessibilityLabel={`${reviews} total reviews`}
            accessibilityRole="text"
          >
            {reviews} Reviews
          </Text>
          <TouchableOpacity
            style={globalStyles.Button}
            accessible
            accessibilityRole="button"
            accessibilityLabel={followed ? "Unfollow" : "Follow"}
            accessibilityHint="Double tap to toggle following status"
            onPress={toggleFollow}
          >
            <Text style={globalStyles.ButtonText}>{followed ? "FOLLOWING" : "FOLLOW"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
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
    fontFamily: 'PoppinsMedium',
    fontSize: 24,
  },
  statsContainer: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 30,
  },
  statsText: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
});

export default ProfileHeader;

