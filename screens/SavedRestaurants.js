import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import globalStyles from '../components/GlobalStyles';
import { useNavigation } from '@react-navigation/native';


export default function SavedRestaurants() {
  const navigation = useNavigation();
  const restaurant = 'K-BOP';

  return (
    <ScrollView accessible accessibilityLabel="List of saved restaurants" accessibilityRole="scrollbar">
      <TouchableOpacity
        accessible
        accessibilityRole="button"
        accessibilityLabel="K-BOP, Tap to view details"
        onPress={() => navigation.navigate('Restaurant', { restaurantName: restaurant })}
      >
        <View style={globalStyles.detailItem} accessible accessibilityElementsHidden={true}>
          <View style={globalStyles.detailTextContainer}>
            <Text style={globalStyles.infoText}>K-BOP</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
