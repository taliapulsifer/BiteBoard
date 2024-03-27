import { ScrollView, View } from 'react-native';
import Post from '../components/Post'

export default function Feed() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
    <Post
        user="OLIVIA"
        restaurant="K-BOP"
        category="KOREAN • $$ • 4.5/5"
        review="Loved the vegetarian dumplings! Definitely a must try here."
        imageUri="https://reactnative.dev/img/tiny_logo.png"
        profilePicUri="https://reactnative.dev/img/tiny_logo.png"
    />
    <Post
        user="OLIVIA"
        restaurant="K-BOP"
        category="KOREAN • $$ • 4.5/5"
        review="Loved the vegetarian dumplings! Definitely a must try here."
        imageUri="https://reactnative.dev/img/tiny_logo.png"
        profilePicUri="https://reactnative.dev/img/tiny_logo.png"
    />
    <View style={{marginBottom: 20}}></View>
</ScrollView>  );
}
