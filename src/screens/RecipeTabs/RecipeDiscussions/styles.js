import { StyleSheet,View } from "react-native"
import { COLORS,SIZES,FONTS } from "../../../constants"
import styled from "styled-components"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  commentOptionContainer:{
    flexDirection:'row',
    marginTop:SIZES.radius,
    paddingVertical:SIZES.base,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:COLORS.gray20
  },
  likesCommentsLabelStyle:{
    marginLeft:3,
    color:COLORS.black,
    ...FONTS.h4
  },
  datePostedText:{
    flex:1,
    textAlign:'right',
    ...FONTS.h4
  },
  commentRepliesContainer:{
    flexDirection:'row',
    marginTop:SIZES.radius,
    paddingVertical:SIZES.base,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:COLORS.gray20
  },
  footerInput:{
    flex:1,
    marginRight:SIZES.base,
    ...FONTS.body3
  },
  sendButtonContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  sendButton:{
    width:25,
    height:25,
    tintColor:COLORS.primary
  }
})

export default styles