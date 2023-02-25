import { Text, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/colors';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: '#f4ce9f',
    textAlign: 'center',
    // borderWidth: Platform.OS==='web'?0:1,
    // borderWidth: Platform.select({ios:1, android:0,web:0}),
    borderWidth: 0,
    borderColor: 'white',
    padding: 12,
    maxWidth:"80%"
  },
});
