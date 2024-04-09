import React from 'react';
import Post from '../components/Post';
import ProfileHeader from '../components/ProfileHeader';
import images from '../assets/images/images';
import { SafeAreaView, ScrollView, View } from 'react-native';

const UserProfile = () => {

  const profileData = {
    name: 'OLIVIA',
    reviews: 1,
    eats: 3,
  };
  
  const mockPosts = [
    {
      id: 1,
      user: 'Olivia',
      restaurant: 'K-BOP',
      cuisine: "Korean",
      cost: '$$',
      rating: '3/5',
      review: 'Loved these vegetarian dumplings!',
      imageUri: images.kbop2,
      profilePicUri: images.pfp1
    },
  ];

  return (
  
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <ProfileHeader
          name={profileData.name}
          reviews={profileData.reviews}
          eats={profileData.eats}
        />
        {mockPosts.map((post) => (    
        <Post
          key={post.id}
          user={post.user}
          restaurant={post.restaurant}
          cuisine={post.cuisine}
          cost={post.cost}
          rating={post.rating}
          review={post.review}
          imageUri={post.imageUri}
          profilePicUri={post.profilePicUri}
        />
      ))}
        <View style={{marginBottom: 20}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
