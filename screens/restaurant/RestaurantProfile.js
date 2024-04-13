import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons
import RestaurantDetail from './RestaurantDetail';
import colors from '../../components/colors';
import globalStyles from '../../components/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const RestaurantProfile = () => {

    const navigation = useNavigation();

    const [bookmarked, setBookmarked] = useState(false);
    const toggleBookmark = () => {
      setBookmarked(!bookmarked);
    };

    const [added, setAdded] = useState(false);
    const handlePress = () => {
        setAdded(!added);
        navigation.navigate('CreatePost');
    };

    return (
        <SafeAreaView style={{ flex: 1 }} accessible accessibilityLabel="Restaurant Profile Screen">
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                <View style={styles.whiteBackground}>
                    <View style={styles.headerContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.restaurantText} accessibilityRole="header">K-BOP</Text>
                        </View>
                        <View style={styles.titleIconsContainer}>
                            <TouchableOpacity onPress={toggleBookmark} accessible accessibilityLabel={bookmarked ? "Unbookmark this restaurant" : "Bookmark this restaurant"} accessibilityRole="button">
                                <FontAwesome name={bookmarked ? 'bookmark' : 'bookmark-o'} size={40} color={bookmarked ? colors.accentSecondary : 'black'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress} accessible accessibilityLabel={added ? "Added to list" : "Add to list"} accessibilityRole="button">
                                <FontAwesome name={added ? 'check' : 'plus-circle'} size={40} color={added ? colors.accentSecondary : 'black'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navBarContainer}>
                            <TouchableOpacity accessible accessibilityRole="button" accessibilityLabel="View overview"><Text style={globalStyles.headerText}>Overview</Text></TouchableOpacity>
                            <TouchableOpacity accessible accessibilityRole="button" accessibilityLabel="View photos"><Text style={globalStyles.headerText}>Photos</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Reviews')} accessible accessibilityRole="button" accessibilityLabel="Navigate to restaurant reviews"><Text style={globalStyles.headerText}>Reviews</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.horizontalScroll} accessible accessibilityLabel="Restaurant categories">
                    <View style={styles.categoryContainer} accessible accessibilityLabel="Rating 4.5 out of 5" accessibilityRole="text">
                        <Text style={globalStyles.headerText}>Rating</Text>
                        <Text style={globalStyles.infoText}>4.5/5</Text>
                    </View>
                    <View style={styles.categoryContainer} accessible accessibilityLabel="Price range 10 to 20 dollars" accessibilityRole="text">
                        <Text style={globalStyles.headerText}>Price</Text>
                        <Text style={globalStyles.infoText}>$10-20</Text>
                    </View>
                    <View style={styles.categoryContainer} accessible accessibilityLabel="Korean Cuisine" accessibilityRole="text">
                        <Text style={globalStyles.headerText}>Cuisine</Text>
                        <Text style={globalStyles.infoText}>Korean</Text>
                    </View>
                    <View style={styles.categoryContainer} accessible accessibilityLabel="Casual Vibe" accessibilityRole="text">
                        <Text style={globalStyles.headerText}>Vibe</Text>
                        <Text style={globalStyles.infoText}>Casual</Text>
                    </View>
                </ScrollView>

                <View style={styles.tagSection}>
                    <View style={styles.tagSectionTitle}><Text style={globalStyles.headerText}>Dietary Options</Text></View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.horizontalScroll2} accessible accessibilityLabel="Dietary options available">
                        <View style={styles.tagRow}>
                            <Text style={globalStyles.dietTag}>Vegetarian (15)</Text>
                            <Text style={globalStyles.dietTag}>Vegan (2)</Text>
                            <Text style={globalStyles.dietTag}>Gluten Free (1)</Text>
                        </View>
                    </ScrollView>

                    <View style={styles.tagSectionTitle}><Text style={globalStyles.headerText}>Accessibility</Text></View>
                    <View style={styles.tagRow}>
                        <Text style={globalStyles.accessibilityTag}>Wheelchair ramp (10)</Text>
                    </View>
                </View>

                <View style={styles.detailSection}>
                    <RestaurantDetail iconName="location" accessibilityLabel="Restaurant location">{`301 N Guadalupe St Ste 164, San Marcos, TX 78666`}</RestaurantDetail>
                    <RestaurantDetail iconName="clock" accessibilityLabel="Operating hours">{`Open · Closes 9:30 PM`}</RestaurantDetail>
                    <RestaurantDetail iconName="globe" accessibilityLabel="Website link">{`http://kbopstx.com/`}</RestaurantDetail>
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    tagSectionTitle: {
        marginLeft: 20,
        marginBottom: 10,
    },
    tagSection: {
        marginTop: 20,
    },
    detailSection: {
        marginBottom: 20,
    }
});

export default RestaurantProfile;
