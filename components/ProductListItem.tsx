import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';

export default function ProductListItem({product}) {
    console.log(product)
    return (
      <View style={styles.container}>
        <Image source={{uri: product.image}} style={styles.image}/>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 20,
    },
    title : {
      fontWeight: '600',
      fontSize: 18,
      marginVertical: 10,
      
    },
    price : {
      fontWeight: 'bold',
      color: '#0a7ea4',
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    }
  });
  