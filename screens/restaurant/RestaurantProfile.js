import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons
import RestaurantDetail from './RestaurantDetail';
import colors from '../../components/colors';
import CustomText from '../../components/customText';

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
                            <CustomText style={styles.restaurantText}>K-BOP</CustomText>
                        </View>
                        <View style={styles.titleIconsContainer}>
                            <TouchableOpacity onPress={toggleBookmark} >
                                <FontAwesome name={bookmarked ? 'bookmark' : 'bookmark-o'} size={40} color={bookmarked ? colors.accentSecondary : 'black'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleAdd}>
                                <FontAwesome name={added ? 'check' : 'plus'} size={40} color={added ? colors.accentSecondary : 'black'} />                            
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navBarContainer}>
                            <TouchableOpacity><CustomText style={styles.navBarText}>Overview</CustomText></TouchableOpacity>
                            <TouchableOpacity><CustomText style={styles.navBarText}>Photos</CustomText></TouchableOpacity>
                            <TouchableOpacity><CustomText style={styles.navBarText}>Reviews</CustomText></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.categoryRow}>
                    <View style={styles.categoryContainer}>
                        <CustomText style={styles.categoryTitle}>Rating</CustomText>
                        <CustomText style={styles.categoryInfo}>4.5 ★★★★☆</CustomText>
                    </View>
                    <View style={styles.categoryContainer}>
                        <CustomText style={styles.categoryTitle}>Price</CustomText>
                        <CustomText style={styles.categoryInfo}>$10-20</CustomText>
                    </View>
                </View>
                <View style={styles.categoryRow}>
                    <View style={styles.categoryContainer}>
                        <CustomText style={styles.categoryTitle}>Cuisine</CustomText>
                        <CustomText style={styles.categoryInfo}>Korean</CustomText>
                    </View>
                    <View style={styles.categoryContainer}>
                        <CustomText style={styles.categoryTitle}>Vibe</CustomText>
                        <CustomText style={styles.categoryInfo}>Casual</CustomText>
                    </View>
                </View>
                <View style={styles.tagSection}>
                    <View style={styles.tagSectionTitle}><CustomText style={styles.navBarText}>Dietary Options</CustomText></View>
                    <View style={styles.tagRow}>
                        <CustomText style={styles.dietTag}>Vegetarian</CustomText>
                        <CustomText style={styles.dietTag}>Vegan</CustomText>
                        <CustomText style={styles.dietTag}>Gluten Free</CustomText>
                    </View>
                    <View style={styles.tagSectionTitle}><CustomText style={styles.navBarText}>Accessibility</CustomText></View>
                    <View style={styles.tagRow}>
                        <CustomText style={styles.accessibilityTag}>Wheelchair ramp</CustomText>
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
        fontWeight: 'bold',
        fontSize: 25,
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
        color: colors.textPrimary,
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
        fontSize: 20,
        fontWeight: '600',
        color: colors.textPrimary,
        marginBottom: 5,
    },
    categoryInfo: {
        fontSize: 18,
        color: colors.textPrimary,
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
        backgroundColor: colors.accentPrimary,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
    },
    accessibilityTag: {
        fontSize: 20,
        color: 'white',
        backgroundColor: colors.accentSecondary,
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
