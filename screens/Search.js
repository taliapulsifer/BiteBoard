import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../components/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import colors from '../components/colors';

export default function Search() {
  
  const mockRestaurants = [
    { id: 1, name: "K-BOP", address: "123 Street, City", tags: ["Korean", "Vegetarian", "Vegan"], rating: 4, imageUrl: "https://reactnative.dev/img/tiny_logo.png" },
    { id: 2, name: "KFC", address: "123 Street, City", tags: ["Chicken"], rating: 3, imageUrl: "https://reactnative.dev/img/tiny_logo.png" },
    { id: 3, name: "Torchy's Tacos", address: "456 Avenue, City", tags: ["Mexican", "Gluten Free"], rating: 5, imageUrl: "https://reactnative.dev/img/tiny_logo.png" },
  ];
  
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const filterRestaurants = (query) => {
    if (!query.trim()) {
      setFilteredResults([]);
    } else {
      const filtered = mockRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  };

  useEffect(() => {
    filterRestaurants(searchQuery);
  }, [searchQuery]);

  return (
    <ScrollView style={styles.container} accessible accessibilityLabel="Scrollable container for search results">
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants"
          onChangeText={setSearchQuery}
          value={searchQuery}
          accessible
          accessibilityRole="search"
          accessibilityLabel="Search input"
          accessibilityHint="Type the name of the restaurant you are looking for"
        />
        <TouchableOpacity 
          style={styles.searchIcon} 
          accessible 
          accessibilityRole="button"
          accessibilityLabel="Search button"
          accessibilityHint="Double tap to search"
          onPress={() => filterRestaurants(searchQuery)}
        >
          <Icon name="search" size={20} />
        </TouchableOpacity>
      </View>

      {filteredResults.map((restaurant, index) => (
      <TouchableOpacity key={restaurant.id} style={styles.card} 
        onPress={() => navigation.navigate('Restaurant', { restaurantId: restaurant.id })}
        accessible
        accessibilityRole="button"
        accessibilityLabel={`Details for ${restaurant.name}, Tap for more`}
        accessibilityHint="Navigates to the restaurant details page"
      >
        <View style={styles.detailItem} accessible accessibilityElementsHidden={true}>
          <View style={styles.detailTextContainer}>
              <Text style={globalStyles.infoText}>{restaurant.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchSection: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    margin: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  searchIcon: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  detailTextContainer: {
    marginLeft: 10,
    marginRight: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
});
