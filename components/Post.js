import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import globalStyles from './GlobalStyles';
import colors from './colors';

const Post = ({ user, restaurant, cuisine, cost, rating, review, imageUri, profilePicUri }) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  const toggleLike = () => {
    setLiked(!liked);
  };

  // Helper function to determine the source type
  const getImageSource = (image) => {
    if (typeof image === 'number') {
      return image;
    }
    return { uri: image };
  };

  return (
    <View style={styles.container} accessible accessibilityLabel={`Post by ${user}`}>
          <TouchableOpacity
          onPress={() => navigation.navigate('UserProfile', { username: user })}
          accessible
          accessibilityRole="button"
          accessibilityLabel={`Navigate to ${user} profile`}
        >  
        <View style={styles.header}>      
        <Image
          source={getImageSource(profilePicUri)}
          style={globalStyles.profilePic}
          accessible
          accessibilityLabel={`Profile picture of ${user}`}
        />
        <Text style={styles.username}>{user}</Text>
      </View>
      </TouchableOpacity>
      <Image
        source={getImageSource(imageUri)}
        style={styles.image}
        accessible
        accessibilityLabel={`Image from ${user} about ${restaurant}`}
      />
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Restaurant', { restaurantName: restaurant })}
          accessible
          accessibilityRole="button"
          accessibilityLabel={`Navigate to ${restaurant} details`}
        >
          <View style={styles.restaurantContainer}>
            <Octicons name={'location'} size={24} color={colors.textPrimary} />
            <Text style={globalStyles.headerText}>{restaurant.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
        <Text style={globalStyles.infoSmall}>{review}</Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTag}>{cuisine}</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTag}>{cost}</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTag}>{rating}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={toggleLike}
            style={styles.likeButton}
            accessible
            accessibilityRole="button"
            accessibilityLabel={liked ? `Unlike ${restaurant}` : `Like ${restaurant}`}
          >
            <Octicons name={liked ? 'heart-fill' : 'heart'} size={26} color={liked ? colors.accentSecondary : 'black'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.likeButton}
            accessible
            accessibilityRole="button"
            accessibilityLabel={`Comment on ${restaurant}`}
          >
            <Octicons name="comment" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    margin: 10,
    elevation: 3,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 15,
  },
  username: {
    fontFamily: 'PoppinsMedium',
    color: colors.textPrimary,
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
  content: {
    padding: 15,
  },
  restaurantContainer: {
    alignContent: 'flex-start',
    flexDirection: 'row',
    gap: 10,
  },
  restaurant: {
    fontFamily: 'PoppinsMedium',
    color: colors.textPrimary,
    fontSize: 20,
  },
  category: {
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  likeButton: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  bookmarkButton: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'textAlign',
    padding: 15,
    justifyContent: 'space-between', // This aligns children to both ends
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // This ensures buttons are aligned to the right
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  categoryTag: {
    fontSize: 15, // Adjusted for better space management
    fontFamily: 'Poppins',
    color: colors.accentPrimary,
    backgroundColor: colors.accentTertiary,
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 0, // Ensure there's space around each tag
  },
});

export default Post;
