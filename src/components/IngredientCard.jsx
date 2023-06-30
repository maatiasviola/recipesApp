import { Image, StyleSheet, View,Text } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../constants"

const IngredientCard = ({utilizados})=>{

  /*<View style={styles.imageContainer}>
  <Image source={ingredient.icon} style={styles.image}/>
  </View>
  return(
  <View style={styles.container}>*/
  return( 
    <View
    style={{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:SIZES.padding,
      height:70
    }}
  >
    {/* Status */}
    <Image 
      source={utilizados?.is_complete?
      icons.completed : utilizados?.is_playing ? icons.play_1 : icons.lock}
      style={{
        width:40,
        height:40
      }}  
    />

    {/* Info */}
    <View
      style={{
        marginLeft:SIZES.radius,
        flex:1,
      }}  
    >
      <Text
        style={{
          ...FONTS.h3
        }}
      > 
        {utilizados?.ingrediente?.nombre}
      </Text>
      <Text
        style={{
          ...FONTS.body4,
          color:COLORS.gray30
        }}
      >
       {utilizados?.cantidad} {utilizados?.unidad?.descripcion} 
      </Text>
    </View>

    {/* Download */}
    <View
      style={{
        flexDirection:'row'
      }}
    >
      <Text 
        style={{
          ...FONTS.body4,
          color:COLORS.gray30
        }}
      >
        {utilizados?.observaciones} 
      </Text>
      <Image 
        source={icons.download}
        style={{
          width:25,
          height:25,
          marginLeft:SIZES.base
        }}  
      />
    </View>

  </View>
  )
  
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingHorizontal:30,
    marginVertical:5
  },
  imageContainer:{
    backgroundColor:COLORS.lightGray,
    borderRadius:5,
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:40,
    height:40
  },
  text:{
    ...FONTS.body3
  },
  descriptionContainer:{
    flex:1,
    paddingHorizontal:20,
    justifyContent:'center'
  },
  quantityContainer:{
    alignItems:'flex-end',
    justifyContent:'center'
  }
})

export default IngredientCard