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
    ];

    const [bookmarked, setBookmarked] = useState(false);
    const toggleBookmark = () => {
      setBookmarked(!bookmarked);
    };

    const [added, setAdded] = useState(false);
    const toggleAdd = () => {
      setAdded(!added);
    };

    return (
        <SafeAreaView style={{ flex: 1 }} accessible accessibilityLabel="Restaurant Profile Page" accessibilityRole="adjustable">
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }} accessible accessibilityLabel="Scrollable container for restaurant information">
                <View style={styles.whiteBackground}>
                    <View style={styles.headerContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.restaurantText} accessibilityRole="header">K-BOP</Text>
                        </View>
                        <View style={styles.titleIconsContainer}>
                            <TouchableOpacity onPress={toggleBookmark} accessible accessibilityLabel={bookmarked ? "Unbookmark this restaurant" : "Bookmark this restaurant"} accessibilityRole="button">
                                <FontAwesome name={bookmarked ? 'bookmark' : 'bookmark-o'} size={40} color={bookmarked ? colors.accentSecondary : 'black'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleAdd} accessible accessibilityLabel={added ? "Remove from list" : "Add to list"} accessibilityRole="button">
                                <FontAwesome name={added ? 'check' : 'plus-circle'} size={40} color={added ? colors.accentSecondary : 'black'} />                            
                            </TouchableOpacity> 
                        </View>
                        <View style={styles.navBarContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Overview')} accessible accessibilityRole="button" accessibilityLabel="Navigate to overview">
                                <Text style={globalStyles.headerText}>Overview</Text>
                            </TouchableOpacity>                            
                            <TouchableOpacity accessible accessibilityRole="button" accessibilityLabel="View photos">
                                <Text style={globalStyles.headerText}>Photos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity accessible accessibilityRole="button" accessibilityLabel="View reviews">
                                <Text style={globalStyles.headerText}>Reviews</Text>
                            </TouchableOpacity>
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
                        accessible
                        accessibilityLabel={`Post by ${post.user} about ${post.restaurant}`}
                        accessibilityHint="Tap to view post details"
                    />
                ))}
                <View style={{marginBottom: 20}} accessible accessibilityElementsHidden={true}></View>
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
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});

export default RestaurantProfile;
