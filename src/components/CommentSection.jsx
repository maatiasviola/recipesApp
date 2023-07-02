import { View,Image,Text } from "react-native"
import { FONTS, images, SIZES } from "../constants"

const CommentSection = ({commentItem, commentOption}) =>{
  return(
    <View
      style={{
        flexDirection:'row',
        marginTop:SIZES.padding
      }}
    >
      {/* Profile Photo */}
      <Image 
        source={commentItem?.usuario.avatar || images.defaultUser}
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
        <Text style={{...FONTS.h3}}>{commentItem?.usuario.nickname}</Text>
        
        {/* Comment */}
        <Text style={{...FONTS.body4}}>{commentItem?.comentarios}</Text>

        {/* Comment Options */}
        {commentOption}
      </View>
    </View>
  )
}

export default CommentSection