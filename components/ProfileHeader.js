import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import colors from './Colors';
import globalStyles from './GlobalStyles';

const ProfileHeader = ({ name, reviews, eats }) => {
  const [followed, setFollowed] = useState(false); // Correctly place the useState hook inside the component

  // Correct the function to use setFollowed
  const toggleFollow = () => {
    setFollowed(!followed);
  };

  return ( // Added return statement for JSX
    <View style={styles.whiteBackground}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.profilePicture}
          source={{ uri: 'profile_picture_url' }}
          accessible={true}
          accessibilityLabel="Profile picture"
        />
        <Text style={styles.nameText} accessibilityRole="header">
          {name}
        </Text>
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>
            {eats} Eats
          </Text>
          <Text style={styles.statsText}>
            {reviews} Reviews
          </Text>
          <TouchableOpacity
            style={styles.friendButton}
            accessible={true}
            accessibilityLabel={followed ? "Unfollow" : "Follow"}
            accessibilityRole="button"
            accessibilityHint="Double tap to toggle follow state"
            onPress={toggleFollow} // Attach the toggleFollow function to onPress
          >
            <Text style={styles.friendButtonText}>{followed ? "FOLLOWING" : "FOLLOW"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navBarContainer}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Activity"
          accessibilityRole="button"
        >
          <Text style={globalStyles.headerText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Photos"
          accessibilityRole="button"
        >
          <Text style={globalStyles.headerText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Reviews"
          accessibilityRole="button"
        >
          <Text style={globalStyles.headerText}>Reviews</Text>
        </TouchableOpacity>
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
  friendButton: {
    backgroundColor: colors.accentSecondary,
    padding: 10,
    borderRadius: 5,
  },
  friendButtonText: {
    fontFamily: 'Poppins',
    color: 'white',
  },
});

export default ProfileHeader;
