import { TouchableOpacity,Text } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants"

const TextButton=({value, onPress,disabled,containerStyle,labelStyle})=>{
  return(
    <TouchableOpacity
      style={{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: COLORS.primary,
        ...containerStyle
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
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