import { View,Image,Text,FlatList } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../constants"
import IconLabelButton from "./IconLabelButton"

const CommentSection = ({commentItem, commentOption, commentReplies}) =>{
  return(
    <View
      style={{
        flexDirection:'row',
        marginTop:SIZES.padding
      }}
    >
      {/* Profile Photo */}
      <Image 
        source={commentItem?.profile}
        style={{
          width:40,
          height:40,
          borderRadius:20
        }}
      />

      {/* Name & Comment */}
      <View
        style={{
          flex:1,
          marginTop:3,
          marginLeft:SIZES.radius
        }}
      >
        {/* Name */}
        <Text style={{...FONTS.h3}}>{commentItem?.name}</Text>
        
        {/* Comment */}
        <Text style={{...FONTS.body4}}>{commentItem?.comment}</Text>

        {/* Comment Options */}
        {commentOption}

        {/* Replies Section */}
        {commentReplies}
      </View>
    </View>
  )
}

export default CommentSection