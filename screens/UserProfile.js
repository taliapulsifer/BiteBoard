import React from 'react';
import Post from '../components/Post';
import ProfileHeader from '../components/ProfileHeader';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

const UserProfile = () => {

  const profileData = {
    name: 'OLIVIA',
    reviews: 13,
    eats: 30,
  };

  return (
  
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <ProfileHeader
          name={profileData.name}
          reviews={profileData.reviews}
          eats={profileData.eats}
        />
        <Post
          user="OLIVIA"
          restaurant="KBOP"
          category="KOREAN • $$ • CASUAL"
          review="Loved the vegetarian dumplings! Definitely a must try here."
          imageUri="https://reactnative.dev/img/tiny_logo.png"
          profilePicUri="https://reactnative.dev/img/tiny_logo.png"
        />
        <View style={{marginBottom: 20}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
