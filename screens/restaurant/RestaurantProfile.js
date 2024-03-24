import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons
import RestaurantDetail from './RestaurantDetail';

const colors = {
    primary: 'magenta', // magenta color for primary actions
    background: '#ffffff',
    text: 'black',
    tagBackground: '#f0f0f0',
  };

const RestaurantProfile = () => {

    // bookmark JS
    const [bookmarked, setBookmarked] = useState(false); // This should be inside the component
  
    const toggleBookmark = () => {
      setBookmarked(!bookmarked); // This toggles the state
    };

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
                            <TouchableOpacity onPress={toggleBookmark} >
                                <FontAwesome name={bookmarked ? 'bookmark' : 'bookmark-o'} size={24} color={bookmarked ? 'magenta' : 'black'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleAdd}>
                                <FontAwesome name={added ? 'check' : 'plus'} size={24} color={added ? 'magenta' : 'black'} />                            
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navBarContainer}>
                            <TouchableOpacity><Text style={styles.navBarText}>Overview</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.navBarText}>Photos</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.navBarText}>Reviews</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.categoryRow}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>Rating</Text>
                        <Text style={styles.categoryInfo}>4.5 ★★★★☆</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>Price</Text>
                        <Text style={styles.categoryInfo}>$10-20</Text>
                    </View>
                </View>
                <View style={styles.categoryRow}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>Cuisine</Text>
                        <Text style={styles.categoryInfo}>Korean</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>Vibe</Text>
                        <Text style={styles.categoryInfo}>Casual</Text>
                    </View>
                </View>
                <View style={styles.tagSection}>
                    <View style={styles.tagSectionTitle}><Text style={styles.navBarText}>Dietary Options</Text></View>
                    <View style={styles.tagRow}>
                        <Text style={styles.dietTag}>Vegetarian</Text>
                        <Text style={styles.dietTag}>Vegan</Text>
                        <Text style={styles.dietTag}>Gluten Free</Text>
                    </View>
                    <View style={styles.tagSectionTitle}><Text style={styles.navBarText}>Accessibility</Text></View>
                    <View style={styles.tagRow}>
                        <Text style={styles.accessibilityTag}>Wheelchair ramp</Text>
                    </View>
                </View>
                <View style={styles.detailSection}>
                    <RestaurantDetail iconName="map-marker">{`301 N Guadalupe St Ste 164, San Marcos, TX 78666`}</RestaurantDetail>
                    <RestaurantDetail iconName="clock-o">{`Open · Closes 9:30 PM`}</RestaurantDetail>
                    <RestaurantDetail iconName="globe">{`http://kbopstx.com/`}</RestaurantDetail>
                </View>
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
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    restaurantText: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingVertical: 10,
        color: colors.text,
    },
    navBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
        },
    navBarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 10,
        },
    categoryContainer: {
        width: '45%',
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
    categoryTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.text,
        marginBottom: 5,
    },
    categoryInfo: {
        fontSize: 18,
        color: colors.text,
    },
    tagRow: {
        marginHorizontal: 20,
        marginBottom: 20, // Increased bottom margin for space after the tags
        flexDirection: 'row',
        justifyContent: 'flex-start', // Align tags to the start
        flexWrap: 'wrap',
    },
    dietTag: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'magenta',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
    },
    accessibilityTag: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'teal',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
    },
    tagSectionTitle: {
        marginLeft: 20, // Align with the tagRow's margin
        marginBottom: 10, // Space before the tags start
        fontSize: 20,
        fontWeight: 'bold',
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
