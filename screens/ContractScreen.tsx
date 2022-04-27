import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function ContractScreen({ navigation }: RootStackScreenProps<'Contract'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.normal}>Contract text</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
