import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Octicons } from '@expo/vector-icons'; 
import globalStyles from '../components/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

export default function Search() {
  
  const mockRestaurants = [
    { id: 1, name: "K-BOP Korean Cuisine", address: "123 Street, City", tags: ["Korean", "Vegetarian", "Vegan"], rating: 4.5, imageUrl: "https://reactnative.dev/img/tiny_logo.png" },
    { id: 2, name: "Taco Haven", address: "456 Avenue, City", tags: ["Mexican", "Gluten Free"], rating: 4.2, imageUrl: "https://reactnative.dev/img/tiny_logo.png" },
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
    <ScrollView style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={20} />
        </TouchableOpacity>
      </View>

      {filteredResults.map((restaurant) => (
      <TouchableOpacity key={restaurant.id} style={styles.card} onPress={() => navigation.navigate('Restaurant', { restaurantId: restaurant.id })}>
        <View>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  filterButton: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  filterText: {
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10, 
    paddingHorizontal: 15, // Adjust padding as needed
    margin: 10,
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space items evenly
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  restaurantName: {
    fontSize: 16, // Adjust font size as needed
    fontWeight: 'bold', // Make the font bold
  },
  restaurantAddress: {
    fontSize: 12, // Adjust font size as needed
    color: '#666', // Adjust text color as needed
  },
  touchable: {
    alignSelf: 'stretch', // Stretch to the parent width
    alignItems: 'center', // Center children horizontally
  },
  ratingAndTags: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    width: '100%',
    flexWrap: 'wrap',
  },
});