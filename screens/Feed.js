import { ScrollView, View } from 'react-native';
import Post from '../components/Post'
import CustomText from '../components/customText';

export default function Feed() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
    <Post
        user="OLIVIA"
        restaurant="K-BOP"
        category="KOREAN • $$ • CASUAL"
        review="Loved the vegetarian dumplings! Definitely a must try here."
        imageUri="https://reactnative.dev/img/tiny_logo.png"
        profilePicUri="https://reactnative.dev/img/tiny_logo.png"
    />
    <Post
        user="OLIVIA"
        restaurant="K-BOP"
        category="KOREAN • $$ • CASUAL"
        review="Loved the vegetarian dumplings! Definitely a must try here."
        imageUri="https://reactnative.dev/img/tiny_logo.png"
        profilePicUri="https://reactnative.dev/img/tiny_logo.png"
    />
    <View style={{marginBottom: 20}}></View>
</ScrollView>  );
}
