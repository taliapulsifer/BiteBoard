import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons'; // Make sure to install expo vector icons
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons
import globalStyles from './GlobalStyles';
import colors from './colors'

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
        <Image source={{ uri: profilePicUri }} style={globalStyles.profilePic} />
        <Text style={styles.username}>{user}</Text>
      </View>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Retaurant', { restaurantName: restaurant })}>
        <View style={styles.restaurantContainer}>
        <Octicons name={'location'} size={24} color={colors.textPrimary} />
          <Text style={globalStyles.headerText}>{restaurant.toUpperCase()}</Text>
        </View>
        <Text style={globalStyles.infoSmall}>{category}</Text>
        </TouchableOpacity>
        <Text style={globalStyles.infoSmall}>{review}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkButton}>
          <FontAwesome name={bookmarked ? 'bookmark' : 'bookmark-o'} size={26} color={bookmarked ? colors.accentSecondary : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
          <Octicons name={liked ? 'heart-fill' : 'heart' } size={26} color={liked ? colors.accentSecondary : 'black' } />
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
