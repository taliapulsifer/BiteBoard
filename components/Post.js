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

  const getImageSource = (image) => {
    if (typeof image === 'number') {
      return image;
    }
    return { uri: image };
  };

  return (
    <View style={styles.container} accessible accessibilityLabel={`Post by ${user}, click for more details.`} accessibilityRole="adjustable">
      <TouchableOpacity
        onPress={() => navigation.navigate('UserProfile', { username: user })}
        accessible
        accessibilityRole="button"
        accessibilityLabel={`Navigate to ${user}'s profile`}
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
        <Text style={globalStyles.infoSmall} accessible accessibilityLabel="Review">{review}</Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTag} accessible accessibilityLabel={`Cuisine: ${cuisine}`}>{cuisine}</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTag} accessible accessibilityLabel={`Cost: ${cost}`}>{cost}</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTag} accessible accessibilityLabel={`Rating: ${rating} stars`}>{rating}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,  // Ensure there's visual space between the icon and the text
  },
  categoryTag: {
    fontSize: 15,
    fontFamily: 'Poppins',
    color: colors.accentPrimary,
    backgroundColor: colors.accentTertiary,
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginHorizontal: 5,  // Added horizontal margin for better spacing
  },
  likeButton: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Post;
