import { Image,StyleSheet,View, TextInput,TouchableOpacity } from "react-native"
import { COLORS, SIZES,FONTS } from "../constants"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

const SearchInput = () => {

  const navigation = useNavigation()

  const [search,setSearch] = useState("")

  return(
    <View style={styles.searchInput}>
      <TouchableOpacity onPress={()=>navigation.navigate("RecipeListing",{nombre:search})}>
      <Image 
        style={styles.image} 
        source={require('../assets/icons/search.png')}
      />
      </TouchableOpacity>
      <TextInput 
        style={styles.input}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholderTextColor={COLORS.gray}
        placeholder='Buscar Recetas'
        onSubmitEditing={()=>navigation.navigate("RecipeListing",{nombre:search})}
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
    borderRadius:10,
    marginTop:10
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