import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>owera</Text>
      <View style={styles.separator}/>
      <Text style={styles.title}>Why</Text>
      <Text style={styles.normal}>To have always and instant any kind of professional online available.</Text>
      <View style={styles.separator}/>
      <Text style={styles.title}>How</Text>
      <Text style={styles.normal}>To create a phonebook where professionals get videocalled.</Text>
      <View style={styles.separator}/>
      <Text style={styles.normal}>#link to contract</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.normal}>#Logout</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.normal}>#send mail to delete account and data</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.normal}>#Mission Vision #Questions</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.incorporation}>OWERA ltd inc. 2022     #We love our users</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  normal: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  incorporation: {
    fontSize: 15,
    fontWeight: 'normal',
    color: "grey",
  },
  logo: {
    fontSize: 100,
    fontWeight: 'normal',
    color: "#2f95dc",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
