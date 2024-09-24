import { StyleSheet, View, Text, Image, SafeAreaView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import {Product} from '@/constants/types';

export const defaultPizzaImg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'
type ProductListItemProps = {
  product: Product;
}

export default function ProductListItem({product}: ProductListItemProps) {
    console.log(product)
    return (
      <Link href="menu/1" asChild>
        <Pressable style={styles.container}>
          <Image source={{uri: product.image || defaultPizzaImg}} style={styles.image}/>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
      </Pressable>
      </Link>
    );
  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
      flex: 1,
      maxWidth: '50%'
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
  