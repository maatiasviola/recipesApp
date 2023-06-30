import { TouchableOpacity,Text } from "react-native"
import { FONTS } from "../constants"

const TextButton=({value, onPress,containerStyle,labelStyle})=>{
  return(
    <TouchableOpacity
      style={{
        alignItems:'center',
        justifyContent:'center',
        ...containerStyle
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...FONTS.h3,
          ...labelStyle 
        }}
      >
        {value}
      </Text>
    </TouchableOpacity>
  )
}

export default TextButton