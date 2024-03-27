import { StyleSheet } from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 15,
      },
      infoTag: {
        fontSize: 16, // Adjusted for better space management
        fontFamily: 'Poppins',
        color: colors.textPrimary,
        backgroundColor: colors.accentTertiary,
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 10,
        margin: 5, // Ensure there's space around each tag
      },
      dietTag: {
        fontSize: 16, // Adjusted for consistency
        fontFamily: 'Poppins',
        color: 'white',
        backgroundColor: colors.accentSecondary,
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 10,
        margin: 5, // Consistent margin for visual balance
        textAlign: 'center', // This ensures text is centered within its container
      },
      accessibilityTag: {
        fontSize: 16, // Adjusted for consistency
        fontFamily: 'Poppins',
        color: 'white',
        backgroundColor: colors.accentPrimary,
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 10,
        margin: 5, // Consistent margin for visual balance
      },
      infoText: {
        fontFamily: 'Poppins',
        fontSize: 16,
      },
      headerText: {
        fontFamily: 'PoppinsMedium',
        fontSize: 18,
      },
});

export default styles;