import { ScrollView, View } from 'react-native';
import Post from '../components/Post';
import images from '../assets/images/images'; 

export default function Feed() {
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
    {
        id: 2,
        user: 'Talia',
        restaurant: 'K-BOP',
        cuisine: "Korean",
        cost: '$$',
        rating: '5/5',        review: 'This place has the best Korean food in San Marcos! The black tea boba is my favorite.',
        imageUri: images.kbop1,
        profilePicUri: images.pfp2
      },
      {
        id: 3,
        user: 'Mimi',
        restaurant: 'K-BOP',
        cuisine: "Korean",
        cost: '$$',
        rating: '4/5',        
        review: 'Definitely my favorite place to eat in San Marcos. The staff is so sweet, the food is delicious, and the ambiance is so cozy. Only downside is the limited seating.',
        imageUri: images.kbop3,
        profilePicUri: images.pfp3,
      },
  ];

  return (
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
  );
}
