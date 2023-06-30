import { TextInput,View,Text,Image } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants"

const SimpleInput = ({
  containerStyle,
  inputContainerStyle,
  placeholder,
  inputStyle,
  value,
  onChange,
  keyboardType = "default",
  placeholderTextColor=COLORS.gray60
}) =>{  
  return(
    <View style={{...containerStyle}}>
      <View
        style={{
          backgroundColor:COLORS.lightGray,
          flexDirection:'row',
          height:55,
          paddingHorizontal:SIZES.radius,
          borderRadius:SIZES.radius,
          alignItems:'center',
          marginTop:SIZES.radius,
          ...inputContainerStyle
        }}
      >
        <TextInput
          style={{
            flex:1,
            paddingVertical:0,
            borderWidth:0,
            ...FONTS.body3,
            ...inputStyle
          }}
          value={value}
          keyboardType={keyboardType}
					onChange={onChange}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
    </View>
  )
}

export default SimpleInput