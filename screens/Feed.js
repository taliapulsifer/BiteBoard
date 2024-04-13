import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Post from '../components/Post';
import mockPosts from '../assets/PostData';

export default function Feed() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'top', 'left']}>
        <ScrollView 
          contentContainerStyle={{ paddingBottom: 60 }}
          accessible={true}
          accessibilityLabel="Feed with multiple posts"
          accessibilityRole="scrollbar"
        >
          {mockPosts.map((post, index) => (    
            <View key={post.id} accessible accessibilityLabel={`Post number ${index + 1}`}>
              <Post
                user={post.user}
                restaurant={post.restaurant}
                cuisine={post.cuisine}
                cost={post.cost}
                rating={post.rating}
                review={post.review}
                imageUri={post.imageUri}
                profilePicUri={post.profilePicUri}
                accessibilityElementsHidden={false}
              />
            </View>
          ))}
          <View style={{ marginBottom: 20 }}></View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
