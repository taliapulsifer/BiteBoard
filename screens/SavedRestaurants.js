import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import colors from '../components/colors';
import globalStyles from '../components/GlobalStyles';

export default function SavedRestaurants() {

  return (
    <ScrollView>
    <TouchableOpacity>
      <View style={globalStyles.detailItem}>
          <View style={globalStyles.detailTextContainer}>
              <Text style={globalStyles.infoText}>K-BOP</Text>
          </View>
      </View>
    </TouchableOpacity>
    </ScrollView>
  );
};
