import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import colors from '../components/colors';
import globalStyles from '../components/GlobalStyles';

export default function SavedRestaurants() {

  return (
    <ScrollView>
    <View style={styles.detailItem}>
        <View style={styles.detailTextContainer}>
            <Text style={globalStyles.infoText}>K-BOP</Text>
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
      marginLeft: 10,
      marginRight: 5,
    },
    detailText: {
      fontSize: 18,
      color: colors.textPrimary,
    },
  });