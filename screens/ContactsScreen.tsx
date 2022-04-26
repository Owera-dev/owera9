import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ContactsScreen({ navigation }: RootTabScreenProps<'Contacts'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>#Contacts</Text>
      <Text style={styles.normal}>#saved services (purch, service title, prece per hour, name prename of provider, search input for contacts) #save contact if contact == 0</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
    width: '90%',
  },
});
