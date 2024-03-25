import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons'; // Make sure to install expo vector icons
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons
import colors from './colors'
import CustomText from './customText'; // Adjust the import path as necessary

const Post = ({ user, restaurant, category, review, imageUri, profilePicUri }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const navigation = useNavigation();

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profilePicUri }} style={styles.profilePic} />
        <CustomText style={styles.username}>{user}</CustomText>
      </View>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Retaurant', { restaurantName: restaurant })}>
        <View style={styles.restaurantContainer}>
        <Octicons name={'location'} size={24} color={colors.textPrimary} />
          <CustomText style={styles.restaurant}>{restaurant.toUpperCase()}</CustomText>
        </View>
        <CustomText style={styles.category}>{category}</CustomText>
        </TouchableOpacity>
        <CustomText style={styles.review}>{review}</CustomText>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkButton}>
          <FontAwesome name={bookmarked ? 'bookmark' : 'bookmark-o'} size={26} color={bookmarked ? colors.accentSecondary : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
          <Octicons name={liked ? 'heart' : 'heart-fill'} size={26} color={liked ? 'black' : colors.accentSecondary} />
        </TouchableOpacity>
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
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  username: {
    color: colors.textPrimary,
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: '100%',
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
    color: colors.textPrimary,
    fontSize: 20,
  },
  category: {
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  review: {
    fontSize: 15,
    color: colors.textPrimary,
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
    justifyContent: 'flex-end',
  },
});


export default Post;
