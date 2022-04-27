import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ServeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>#Create offer</Text>
      <Text style={styles.normal}>#Offername #price per hour #Currencyselection #Visual upload #Visual remove #Delete service #Save service</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>#Listed offers</Text>
      <Text style={styles.normal}>#All created services (onPress to edit mode)</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>#Earning</Text>
      <Text style={styles.normal}>#link to stripe payout</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>#Availability</Text>
      <Text style={styles.normal}>#Monday to Sunday (if onpress then available)</Text>
      <Text style={styles.normal}>#Daytime availability from to </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>#About</Text>
      <Text style={styles.normal}>#Language selector (activate or disactivate single language)</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>float(#Invite Saved)</Text>
      <Text style={styles.normal}>#Link to send invitation (as saved contact) #QR code</Text>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
