import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../components/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import colors from '../components/colors';

export default function Search() {
  
  const mockRestaurants = [
    { id: 1, name: "K-BOP", address: "123 Street, City", tags: ["Korean", "Vegetarian", "Vegan"], rating: 4.5, imageUrl: "https://reactnative.dev/img/tiny_logo.png" },
    { id: 2, name: "Torchy's Tacos", address: "456 Avenue, City", tags: ["Mexican", "Gluten Free"], rating: 4.2, imageUrl: "https://reactnative.dev/img/tiny_logo.png" },
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
        <View style={styles.detailItem}>
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
  detailItem: {
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
  detailText: {
    fontSize: 18,
    color: colors.textPrimary,
  },
  touchable: {
    alignSelf: 'stretch', // Stretch to the parent width
    alignItems: 'center', // Center children horizontally
  },
});