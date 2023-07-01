import { StyleSheet } from "react-native"
import { COLORS, SIZES,FONTS } from "../../constants"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  header:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height:250,
    overflow:'hidden'
  },
  title:{
    position:'absolute',
    bottom:70,
    left:30
  },
  iconContainer:{
    position:'absolute',
    top:40,
    left:20,
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    backgroundColor:COLORS.white
  },
  listHeaderContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:270,
    marginBottom:SIZES.base
  },
  filterButtonContainerStyle:{
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:COLORS.primary
  },
  headerBackgroundImageStyle:{
    width:'100%',
    height:'100%',
    borderBottomLeftRadius:60
  },
  headerTitle:{
    position:'absolute',
    color:COLORS.white,
    ...FONTS.h1
  },
  backButton:{
    width:30,
    height:30,
    tintColor:COLORS.black
  }
})

export default styles