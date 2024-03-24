import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install expo vector icons

const colors = {
    primary: 'magenta', // magenta color for primary actions
    background: '#ffffff',
    text: '#333333',
    divider: '#E0E0E0',
    tagBackground: '#f0f0f0',
  };

const RestaurantDetail = ({ iconName, children }) => {
    return (
      <View style={styles.detailItem}>
            <FontAwesome name={iconName} size={24} color={colors.text} style={styles.detailIcon} />

      <View style={styles.detailTextContainer}>
        <Text style={styles.detailText}>{children}</Text>
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
    },
    detailTextContainer: {
      marginLeft: 10,
      marginRight: 5,
    },
    detailText: {
      fontSize: 16,
      color: colors.text,
    },
  });

  export default RestaurantDetail;
