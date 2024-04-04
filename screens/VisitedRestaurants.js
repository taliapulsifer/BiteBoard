import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'; // Changed ScrollAreaView to ScrollView
import colors from '../components/colors';
import globalStyles from '../components/GlobalStyles';
import { Octicons } from '@expo/vector-icons';

export default function VisitedRestaurants() {

  return (
    <ScrollView>
      <View style={styles.detailItem}>
          <View style={styles.detailTextContainer}>
              <Text style={globalStyles.infoText}>K-BOP</Text>
              <View style={styles.ratingContainer}>
              <Octicons name="star-fill" size={16} color="black" />
              <Octicons name="star-fill" size={16} color="black" />
              <Octicons name="star-fill" size={16} color="black" />
              </View>
          </View>
      </View>
    </ScrollView> 
  );
};


const styles = StyleSheet.create({
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
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: 10,
      marginRight: 5,
      gap: 30,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: 10,
      marginRight: 5,
      gap: 5,
    },
    detailText: {
      fontSize: 18,
      color: colors.textPrimary,
    },
  });