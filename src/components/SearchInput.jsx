import { Image,StyleSheet,View, TextInput } from "react-native"
import { COLORS, SIZES,FONTS } from "../constants"

const SearchInput = () => {
  return(
    <View style={styles.searchInput}>
      <Image style={styles.image} source={require('../assets/icons/search.png')}/>
      <TextInput 
        style={styles.input}
        placeholderTextColor={COLORS.gray}
<<<<<<< HEAD
        placeholder='Search Recipes'
=======
        placeholder='Buscar Recetas'
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchInput:{
    flexDirection:'row',
    backgroundColor:COLORS.lightGray,
    height:50,
    paddingHorizontal:SIZES.radius,
    marginHorizontal:SIZES.padding,
    alignItems:'center',
    borderRadius:10
  },
  image:{
    width:20,
    height:20, 
    tintColor:COLORS.gray
  },
  input:{
    marginLeft:SIZES.radius,
    ...FONTS.body3
  }
})

export default SearchInput