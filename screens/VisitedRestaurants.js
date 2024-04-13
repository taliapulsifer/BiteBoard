import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import colors from '../components/colors';
import globalStyles from '../components/GlobalStyles';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function VisitedRestaurants() {

  const navigation = useNavigation();
  const restaurant = 'K-BOP';
  const ratings = [1, 2, 3]; // Example static ratings data

  return (
    <ScrollView 
      accessible 
      accessibilityLabel="List of visited restaurants" 
      accessibilityRole="scrollbar"
    >
      <TouchableOpacity
        accessible
        accessibilityRole="button"
        accessibilityLabel={`${restaurant} with ratings, Tap for more details`}
        accessibilityHint="Navigates to the detailed page of the restaurant"
        onPress={() => navigation.navigate('Restaurant', { restaurantName: restaurant })}
      >
        <View style={globalStyles.detailItem}>
          <View style={globalStyles.detailTextContainer}>
            <Text style={globalStyles.infoText}>{restaurant}</Text>
            <View style={styles.ratingContainer}>
              {ratings.map((_, index) => (
                <Octicons key={index} name="star-fill" size={16} color="black" accessible accessibilityLabel={`Rated ${index + 1} stars`} />
              ))}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
});
