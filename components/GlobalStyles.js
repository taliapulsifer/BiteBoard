// file for component styling that is used throughout the project

import { StyleSheet } from 'react-native';
import colors from './colors';

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
  horizontalScroll: {
    marginTop: 20, 
    marginLeft: 10,
    marginRight: 10
  },
  horizontalScroll2: {
    marginTop: 0, 
    marginLeft: 0,
    marginRight: 10
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  infoTag: {
    fontSize: 16, 
    fontFamily: 'Poppins',
    color: colors.textPrimary,
    backgroundColor: colors.accentTertiary,
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 5, 
  },
  dietTag: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: 'white',
    backgroundColor: colors.accentSecondary,
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 5, 
    textAlign: 'center',
  },
  accessibilityTag: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: 'white',
    backgroundColor: colors.accentPrimary,
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 5,
  },
  infoText: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  headerText: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    margin: 0,
  },
  infoSmall: {
    fontFamily: 'Poppins',
    fontSize: 15,
  },
  Button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  ButtonText: {
    fontFamily: 'Poppins',
    color: 'white',
  },
});

export default styles;