import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Post from '../components/Post'
import { useNavigation } from '@react-navigation/native';


export default function Feed() {

  const navigation = useNavigation();
  
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
    <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}><Text>Log in!</Text></TouchableOpacity>
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
