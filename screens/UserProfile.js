import React from 'react';
import Post from '../components/Post';
import ProfileHeader from '../components/ProfileHeader';
import images from '../assets/images/images';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

const UserProfile = () => {

  const profileData = {
    name: 'OLIVIA',
    reviews: 1,
    eats: 1,
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
    <SafeAreaView accessible accessibilityLabel="User Profile Screen" accessibilityRole="adjustable">
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 60 }}
        accessible
        accessibilityLabel="Scrollable user profile content"
        accessibilityRole="scrollbar"
      >
        <ProfileHeader
          name={profileData.name}
          reviews={profileData.reviews}
          eats={profileData.eats}
          accessible
          accessibilityLabel={`Profile of ${profileData.name}`}
          accessibilityHint="Profile details include reviews and eats"
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
            accessible
            accessibilityLabel={`Post about ${post.restaurant}`}
            accessibilityHint={`Details about ${post.user}'s experience at ${post.restaurant}, tap to read more`}
          />
        ))}
        <View style={{marginBottom: 20}} accessible accessibilityElementsHidden={true}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
