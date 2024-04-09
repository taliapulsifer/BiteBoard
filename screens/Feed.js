import { ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Post from '../components/Post';
import mockPosts from '../assets/PostData';
export default function Feed() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
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
    </SafeAreaProvider>
    
  );
}
