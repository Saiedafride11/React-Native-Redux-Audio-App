import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Text from '../components/text/text';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectStatus } from '../../store/productSlice';
import { ActivityIndicator } from 'react-native-web';

export default function Home() {
  // const dispatch = useDispatch();
  // const status = useSelector(selectStatus);

  // useEffect( () => {
  //   if(status === "idle"){
  //     dispatch(fetchProducts());
  //   }
  // }, [])

  // if( status === "loading"){
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
  //       <ActivityIndicator/>
  //     </View>
  //   )
  // }
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({})