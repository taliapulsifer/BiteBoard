import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../components/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

export default function Search() {

  const navigation = useNavigation();

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
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Retaurant')}>        
      <Text style={styles.restaurantName}>KBOP</Text>
          <View style={styles.ratingAndTags}>
            <Text style={globalStyles.infoTag}>Open</Text>
            <Text style={globalStyles.infoTag}>Korean</Text>
            <Text style={globalStyles.infoTag}> 4.5 ★★★★☆</Text>
            <Text style={globalStyles.infoTag}>$$</Text>
            <Text style={globalStyles.dietTag}>Vegetarian</Text>
            <Text style={globalStyles.dietTag}>Vegan</Text>
            <Text style={globalStyles.dietTag}>Gluten Free</Text>
            <Text style={globalStyles.accessibilityTag}>Wheelchair Ramp</Text>
          </View>
        </TouchableOpacity>
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
    alignItems: 'center', // Centers content horizontally
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryHeader: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center', // Center text horizontally
    width: '100%', // Ensure it occupies the full width
  },
  touchable: {
    alignSelf: 'stretch', // Stretch to the parent width
    alignItems: 'center', // Center children horizontally
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center', // This ensures text is centered within its container
    width: '100%', // This makes sure the text container takes up all the horizontal space
  },
  ratingAndTags: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center tags horizontally for better alignment
    width: '100%',
    flexWrap: 'wrap', // Allow tags to wrap to the next line
    marginTop: 10, // Add some space above the tags section
  },
});