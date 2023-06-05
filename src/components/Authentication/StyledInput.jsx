import { TextInput,View } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

const StyledInput = ({
  containerStyle,
  inputContainerStyle,
  placeholder,
  inputStyle,
  value="",
  prependComponent,
  appendComponent,
  onChange,
  onPress,
  editable,
  secureTextEntry,
  keyboardType="default",
  autoCompleteType="off",
  autoCapitalize="none",
  maxLength,
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
        {prependComponent}

        <TextInput
          style={{
            flex:1,
            paddingVertical:0,
            ...FONTS.body3,
            ...inputStyle
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChange={onChange}
          onPressIn={onPress}
          editable={editable}
        />

        {appendComponent}
      </View>
    </View>
  )
}

export default StyledInput