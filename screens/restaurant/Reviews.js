import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons
import colors from '../../components/colors';
import images from '../../assets/images/images'; 
import globalStyles from '../../components/GlobalStyles';
import Post from '../../components/Post';
import { useNavigation } from '@react-navigation/native';

const RestaurantProfile = () => {
    const navigation = useNavigation();

    const mockPosts = [
        {
            id: 4,
            user: 'Sarah',
            restaurant: 'K-BOP',
            cuisine: "Korean",
            cost: '$$',
            rating: '4.5/5',
            review: 'Wonderful place!',
            imageUri: images.kbop4,
            profilePicUri: images.pfp4
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
    ]

    // bookmark JS
    const [bookmarked, setBookmarked] = useState(false); // This should be inside the component
  
    const toggleBookmark = () => {
      setBookmarked(!bookmarked); // This toggles the state
    };

    // add JS
    const [added, setAdded] = useState(false); // This should be inside the component
    const toggleAdd = () => {
      setAdded(!added); // This toggles the state
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                <View style={styles.whiteBackground}>
                    <View style={styles.headerContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.restaurantText}>K-BOP</Text>
                        </View>
                        <View style={styles.titleIconsContainer}>
                            <TouchableOpacity onPress={toggleBookmark} >
                                <FontAwesome name={bookmarked ? 'bookmark' : 'bookmark-o'} size={40} color={bookmarked ? colors.accentSecondary : 'black'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleAdd}>
                                <FontAwesome name={added ? 'check' : 'plus-circle'} size={40} color={added ? colors.accentSecondary : 'black'} />                            
                            </TouchableOpacity> 
                        </View>
                        <View style={styles.navBarContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Overview')}
                                accessible
                                accessibilityRole="button"
                                accessibilityLabel={`Navigate to general information page for this restaurant`}>  
                                <Text style={globalStyles.headerText}>Overview</Text>
                            </TouchableOpacity>                            
                            <TouchableOpacity><Text style={globalStyles.headerText}>Photos</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={globalStyles.headerText}>Reviews</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>  
                
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

const styles = StyleSheet.create({
    whiteBackground: {
        backgroundColor: colors.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    headerContainer: {
        margin: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleIconsContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 40,
        marginBottom: 20
    }, 
    restaurantText: {
        fontFamily: 'PoppinsMedium',
        fontSize: 25,
        paddingVertical: 10,
        color: colors.text,
    },
    navBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
      },
      categoryContainer: {
        width: 150,
        padding: 15,
        backgroundColor: colors.background,
        margin: 5,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
    tagRow: {
        margnTop: 0,
        marginHorizontal: 20,
        marginBottom: 20, 
        flexDirection: 'row',
        justifyContent: 'flex-start', // Align tags to the start
        flexWrap: 'wrap',
    },
    tagSectionTitle: {
        marginLeft: 20, 
        marginBottom: 10, 
        fontSize: 20,
        color: colors.text,
    },
    tagSection: {
        marginTop: 20
        },
    detailSection: {
        marginBottom: 20
    }
});

export default RestaurantProfile;
