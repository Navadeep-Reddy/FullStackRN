import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pizza Pepperoni</Text>
      <Text>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
