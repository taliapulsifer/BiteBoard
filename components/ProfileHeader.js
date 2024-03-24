// ProfileHeader.js

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ProfileHeader = ({ name, reviews, eats, updates }) => (
  <View style={styles.headerContainer}>
    <Image style={styles.profilePicture} source={{ uri: 'profile_picture_url' }} />
    <Text style={styles.nameText}>{name}</Text>
    <View style={styles.statsContainer}>
      <Text style={styles.statsText}>{reviews} Reviews</Text>
      <Text style={styles.statsText}>{eats} Eats</Text>
    </View>
    <TouchableOpacity style={styles.friendButton}>
      <Text style={styles.friendButtonText}>FOLLOW</Text>
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
    backgroundColor: '#f9c2ff',
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
    fontWeight: 'bold',
  },
  friendButton: {
    backgroundColor: 'magenta',
    padding: 10,
    borderRadius: 5,
  },
  friendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileHeader;
