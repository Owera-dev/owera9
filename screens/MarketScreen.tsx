import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function MarketScreen({ navigation }: RootTabScreenProps<'Market'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>#listed offers</Text>
      <Text style={styles.normal}>#Visuals #Service titles #About service(price 1h, "unused time get refunded") #about provider(language spoken, amount of contacts, name and prename,) #Ratings #Add service to contacts #Purch service #searchword input</Text>
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
    width: '80%',
  },
});
