import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../components/colors';
import CustomText from '../components/customText';

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
        <CustomText style={styles.categoryHeader}>KOREAN</CustomText>
        <Image style={styles.restaurantImage} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
        {/* Other details for the restaurant */}
        <CustomText style={styles.restaurantName}>KBOP</CustomText>
        <View style={styles.ratingAndTags}>
          <CustomText style={styles.infoTag}>Open</CustomText>
          <CustomText style={styles.infoTag}>Korean</CustomText>
          <CustomText style={styles.infoTag}> 4.5 ★★★★☆</CustomText>
          <CustomText style={styles.infoTag}>$$</CustomText>
          <CustomText style={styles.dietTag}>Vegetarian</CustomText>
          <CustomText style={styles.dietTag}>Vegan</CustomText>
          <CustomText style={styles.dietTag}>Gluten Free</CustomText>
          <CustomText style={styles.accessibilityTag}>Wheelchair Ramp</CustomText>
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
    justifyContent: 'center', // Center tags horizontally for better alignment
    width: '100%',
    flexWrap: 'wrap', // Allow tags to wrap to the next line
    marginTop: 10, // Add some space above the tags section
  },
  infoTag: {
    fontSize: 16, // Adjusted for better space management
    color: colors.textPrimary,
    backgroundColor: colors.accentTertiary,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5, // Ensure there's space around each tag
  },
  dietTag: {
    fontSize: 16, // Adjusted for consistency
    color: 'white',
    backgroundColor: colors.accentSecondary,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5, // Consistent margin for visual balance
  },
  accessibilityTag: {
    fontSize: 16, // Adjusted for consistency
    color: 'white',
    backgroundColor: colors.accentPrimary,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5, // Consistent margin for visual balance
  },
});