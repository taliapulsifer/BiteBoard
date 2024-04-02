
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import Navigation from './Navigation'; // Make sure this is the correct path to Navigation.js
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import CustomText from './components/customText';
import { listPosts, createPost } from './src/graphql/queries';

const initialPostState = { name: '', description: '' };
const client = generateClient();

const App = () => {

  const [formState, setPostState] = useState(initialPostState);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchPosts() {
    try {
      const postData = await client.graphql({
        query: listPosts
      });
      const posts = postData.data.listPosts.items;
      setPosts(posts);
    } catch (err) {
      console.log('error fetching posts', err);
    }
  }

  async function addPost() {
    try {
      if (!postState.title || !postState.content) return;
      const post = { ...postState };
      setPosts([...posts, post]);
      setPostState(initialPostState);
      await client.graphql({
        query: createPost,
        variables: {
          input: post
        }
      });
    } catch (err) {
      console.log('error creating post:', err);
    }
  }

  let [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    // Return a loading indicator or some placeholder content
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

