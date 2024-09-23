import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  let text;
  if (id == '1'){
    text = "hey";
  }
  else{
    text = "What the fuck"
  }
    return (
      <View>
        <Text> {text} </Text>
      </View>
    )
  }


export default ProductDetailsScreen;
