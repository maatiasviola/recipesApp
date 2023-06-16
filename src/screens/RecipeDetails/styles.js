import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  headerBar:{
    flexDirection:'row',
    position:'absolute',
    top:SIZES.height > 800 ? 40 : 20,
    left:0,
    right:0,
    paddingHorizontal:SIZES.padding,
    zIndex:1
  },
  backButtonIconStyle:{
    width:25,
    height:25,
    tintColor:COLORS.black
  },
  backButtonContainerStyle:{
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:COLORS.white
  },
  shareFavouriteContainerStyle:{
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  imageContainer:{
    height:SIZES.height>800 ? 220 : 200,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.gray90
  },
  image:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  }
})

export default styles