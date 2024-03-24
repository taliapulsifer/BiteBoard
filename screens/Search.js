import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Feed() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          // onChangeText={...} // Define this
          // value={...} // Define this
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={20} />
        </TouchableOpacity>
      </View>

      {/* This is a placeholder for your restaurant cards, which you would map through your data */}
      {/* For example */}
      {/* {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} data={restaurant} />
      ))} */}
      
      {/* Placeholder for restaurant card */}
      <View style={styles.card}>
        <Text style={styles.categoryHeader}>KOREAN</Text>
        <Image style={styles.restaurantImage} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
        {/* Other details for the restaurant */}
        <Text style={styles.restaurantName}>KBOP</Text>
        <View style={styles.ratingAndTags}>
          <Text style={styles.infoTag}>Open</Text>
          <Text style={styles.infoTag}>Korean</Text>
          <Text style={styles.infoTag}> 4.5 ★★★★☆</Text>
          <Text style={styles.infoTag}>$$</Text>
          <Text style={styles.dietTag}>Vegetarian</Text>
          <Text style={styles.dietTag}>Vegan</Text>
          <Text style={styles.dietTag}>Gluten Free</Text>
          <Text style={styles.accessibilityTag}>Wheelchair Ramp</Text>
        </View>
      </View>
      
      {/* Repeat the restaurant card for other categories */}

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
    padding: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  ratingAndTags: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  infoTag: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
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
});