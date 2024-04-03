import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons'; // Make sure to install expo vector icons
import colors from '../../components/colors';
import globalStyles from '../../components/GlobalStyles';

const RestaurantDetail = ({ iconName, children }) => {
    return (
      <View style={styles.detailItem}>
            <Octicons name={iconName} size={26} color={colors.textPrimary} style={styles.detailIcon} />
      <View style={styles.detailTextContainer}>
        <Text style={globalStyles.infoText}>{children}</Text>
      </View>
      </View>
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
    detailIcon: {
      marginRight: 10,
      color: colors.accentSecondary,
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

  export default RestaurantDetail;
