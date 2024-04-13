import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons'; // Make sure to install expo vector icons
import colors from '../../components/colors';
import globalStyles from '../../components/GlobalStyles';

const RestaurantDetail = ({ iconName, children }) => {
    return (
      <View style={globalStyles.detailItem} accessible accessibilityLabel="Restaurant detail" accessibilityRole="summary">
        <Octicons name={iconName} size={26} color={colors.textPrimary} style={styles.detailIcon} accessible accessibilityLabel={`Icon representing ${iconName}`} />
        <View style={globalStyles.detailTextContainer}>
          <Text style={globalStyles.infoText} accessible accessibilityRole="text">{children}</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  detailIcon: {
    marginRight: 10,
    color: colors.accentSecondary,
  },
});

export default RestaurantDetail;
