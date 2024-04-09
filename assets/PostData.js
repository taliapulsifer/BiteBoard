import images from './images/images'; 

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
        rating: '5/5',        
        review: 'This place has the best Korean food in San Marcos! The black tea boba is my favorite.',
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

export default mockPosts;