import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native'; // Changed ScrollAreaView to ScrollView
import colors from '../components/colors';
import globalStyles from '../components/GlobalStyles';
import { Octicons } from '@expo/vector-icons';

export default function VisitedRestaurants() {

  return (
    <ScrollView>
      <TouchableOpacity>
        <View style={globalStyles.detailItem}>
          <View style={globalStyles.detailTextContainer}>
              <Text style={globalStyles.infoText}>K-BOP</Text>
              <View style={styles.ratingContainer}>
                <Octicons name="star-fill" size={16} color="black" />
                <Octicons name="star-fill" size={16} color="black" />
                <Octicons name="star-fill" size={16} color="black" />
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
      textAlign: 'center',
      marginLeft: 10,
      marginRight: 5,
      gap: 5,
    },
  });