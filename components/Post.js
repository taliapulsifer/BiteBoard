import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons

const colors = {
  background: '#fff',
  textPrimary: '#000',
  textSecondary: 'grey',
  textTertiary: '#333',
  iconLiked: 'magenta',
  iconUnliked: 'black',
  shadow: '#000',
};

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
        <Text style={styles.username}>{user}</Text>
      </View>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Retaurant', { restaurantName: restaurant })}>
          <Text style={styles.restaurant}>{restaurant.toUpperCase()}</Text>
        </TouchableOpacity>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.review}>{review}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkButton}>
          <FontAwesome name={bookmarked ? 'bookmark' : 'bookmark-o'} size={24} color={bookmarked ? 'magenta' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
          <FontAwesome name={liked ? 'heart' : 'heart-o'} size={24} color={liked ? 'magenta' : 'black'} />
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
    fontWeight: 'bold',
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
  restaurant: {
    fontWeight: 'bold',
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
    color: colors.textTertiary,
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
