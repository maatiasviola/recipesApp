import { StyleSheet, TouchableOpacity, View,Image } from "react-native"
import { COLORS, icons, SIZES } from "../constants"

const HeaderBar=({selectedRecipe,navigation})=>{
  return(
    <View style={styles.container}>

      {/*Back Button */}
      <TouchableOpacity 
        style={styles.backButtonContainer}
        onPress={()=>navigation.goBack()}  
      >
        <Image
          source={icons.back}
          style={{
            width:15,
            height:15,
            tintColor:COLORS.lightGray
          }}
        />
      </TouchableOpacity>

      {/*Bookmark */}
      <TouchableOpacity style={styles.bookmarkButtonContainer}>
          <Image 
            source={selectedRecipe?.isBookmark
            ? icons.bookmarkFilled
            :icons.bookmark}
            style={{
              width:30,
              height:30,
              tintColor:COLORS.darkGreen
            }}
          />
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height:90,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    paddingHorizontal:SIZES.padding,
    paddingBottom:10
  },
  backButtonContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:35,
    width:35,
    borderRadius:18,
    borderWidth:1,
    borderColor:COLORS.lightGray,
    backgroundColor:COLORS.transparentBlack5
  },
  bookmarkButtonContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:35,
    width:35
  }
})

export default HeaderBar