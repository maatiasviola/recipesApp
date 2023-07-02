import React from 'react';
import { View, Image, StyleSheet, Text, FlatList } from 'react-native';

const CarouselImagenes = ({images}) => {
  console.log("Llegan al carousel: ",images)
  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.urlContenido } style={styles.image} />
      </View>
    );
  };
  if(images.lenght === 0){
    return(
      <Text>No hay imagenes</Text>
    )
  }
  return (
    
    <View style={styles.container}>
      <FlatList 
        data={images} 
        renderItem={renderItem} 
        keyExtractor={(item,index)=>index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel:{
    maxHeight:300
  },
  carouselItem: {
    width: 300,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CarouselImagenes;
