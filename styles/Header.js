/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';
import colors from '../utils/colors';
const styles = StyleSheet.create({
  views: {
    height: Platform.OS === 'ios' ? 100 : 50,
    backgroundColor: colors.black,
  },
  flexrow: {
    flex: 1,
    flexDirection: 'row',
  },
  flexend: {
    flex: 0.5,
    alignItems: 'flex-end',
    top: Platform.OS === 'ios' ? 30 : 15,
    right: Platform.OS === 'ios' ? 40 : 20,
  },
  flexstart: {
    flex: 0.5,
    alignItems: 'flex-start',
    top: Platform.OS === 'ios' ? 35 : 15,
    left: Platform.OS === 'ios' ? 20 : 10,
  },
  title: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlefont: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.white,
  },
  iconstyle: {
    color: colors.white,
    right: Platform.OS === 'ios' ? 10 : 15,
    top: Platform.OS === 'ios' ? 10 : 0,
  },
  iconstyle2: {
    color: colors.white,
    top: Platform.OS === 'ios' ? 10 : 0,
    left: Platform.OS === 'ios' ? 20 : 15,
  },
  righttxt: {
    color: colors.yellow,
    fontSize: 20,
  },
});

export default styles;
