import { View,Image,Text } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../constants"

const RecipeStepCard = ({step})=>{
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
        source={step?.is_complete?
        icons.completed : step?.is_playing ? icons.play_1 : icons.lock}
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
          {step?.title}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color:COLORS.gray30
          }}
        >
          {step?.duration}
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
          {step?.size}
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

export default RecipeStepCard