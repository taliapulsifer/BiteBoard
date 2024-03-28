import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons
import { Octicons } from '@expo/vector-icons'; // Make sure to install expo vector icons
import RestaurantDetail from './RestaurantDetail';
import colors from '../../components/Colors';
import globalStyles from '../../components/GlobalStyles';

const RestaurantProfile = () => {

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
                            <TouchableOpacity><Text style={globalStyles.headerText}>Overview</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={globalStyles.headerText}>Photos</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={globalStyles.headerText}>Reviews</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>  
                
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.horizontalScroll}>
                    <View style={styles.categoryContainer}>
                        <Text style={globalStyles.headerText}>Rating</Text>
                        <Text style={globalStyles.infoText}>4.5/5</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text style={globalStyles.headerText}>Price</Text>
                        <Text style={globalStyles.infoText}>$10-20</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text style={globalStyles.headerText}>Cuisine</Text>
                        <Text style={globalStyles.infoText}>Korean</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text style={globalStyles.headerText}>Vibe</Text>
                        <Text style={globalStyles.infoText}>Casual</Text>
                    </View>
                    </ScrollView>

                <View style={styles.tagSection}>
                    <View style={styles.tagSectionTitle}><Text style={globalStyles.headerText}>Dietary Options</Text></View>
                        <View style={styles.tagRow}>
                        <Text style={globalStyles.dietTag}>Vegetarian</Text>
                        <Text style={globalStyles.dietTag}>Vegan</Text>
                        <Text style={globalStyles.dietTag}>Gluten Free</Text>
                    </View>
                    <View style={styles.tagSectionTitle}><Text style={globalStyles.headerText}>Accessibility</Text></View>
                    <View style={styles.tagRow}>
                        <Text style={globalStyles.accessibilityTag}>Wheelchair ramp</Text>
                    </View>
                </View>

                <View style={styles.detailSection}>
                    <RestaurantDetail iconName="location">{`301 N Guadalupe St Ste 164, San Marcos, TX 78666`}</RestaurantDetail>
                    <RestaurantDetail iconName="clock">{`Open · Closes 9:30 PM`}</RestaurantDetail>
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
        marginHorizontal: 20,
        marginBottom: 20, // Increased bottom margin for space after the tags
        flexDirection: 'row',
        justifyContent: 'flex-start', // Align tags to the start
        flexWrap: 'wrap',
    },
    tagSectionTitle: {
        marginLeft: 20, // Align with the tagRow's margin
        marginBottom: 10, // Space before the tags start
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
