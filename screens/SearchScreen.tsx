import { StyleSheet, Button, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <AntDesign 
        onPress={() => navigation.navigate("Callendforcustomer")}
        name="videocamera" 
        size={25} 
        color="black"
      />
      <Text style={styles.title}>service title</Text>
      <Text style={styles.normal}>#Visuals #Service titles #About service(price 1h, "unused time get refunded") #about provider(language spoken, amount of Saved, name and prename,) #Ratings #Add service to Saved #Purch service #searchword input</Text>
      </ScrollView>
      <Button 
          title="Login"
          onPress={() => navigation.navigate("Login")}
          />
      <Button 
          title="Incommingcall"
          onPress={() => navigation.navigate("Incommingcall")}
          />
      <Button 
          title="NotFound"
          onPress={() => navigation.navigate("NotFound")}
          />
      <Button 
          title="Callendforcustomer"
          onPress={() => navigation.navigate("Callendforcustomer")}
          />
      <Button 
          title="Callendprovider"
          onPress={() => navigation.navigate("Callendprovider")}
          />
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
