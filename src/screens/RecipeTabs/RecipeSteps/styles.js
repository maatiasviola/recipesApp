import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white,
    flexGrow:1,
    container:'relative'
  },
  header:{
    paddingHorizontal:SIZES.padding,
    marginTop:SIZES.padding
  },
  headerTitle:{
    flex:1,
    ...FONTS.h2
  },
  headerInfo:{
    flexDirection:'row',
    marginTop:SIZES.base
  },
  headerInfoIconContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:SIZES.radius
  },
  headerInfoIcon:{
    width:15,
    height:15,
    tintColor:COLORS.gray20
  },
  headerInfoText:{
    ...FONTS.body4,
    color:COLORS.gray20,
    marginLeft:5
  },
  chefCardContainer:{
    flexDirection:'row',
    marginTop:SIZES.radius,
    alignItems:'center'
  },
  chefPhoto:{
    width:50,
    height:50,
    borderRadius:25
  },
  authorContainer:{
    marginLeft:SIZES.base,
    flex:1,
    justifyContent:'center'
  },
  authorName:{
    ...FONTS.h3,
    fontSize:18
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  icon:{
    fontSize:20,
  }
})

export default styles