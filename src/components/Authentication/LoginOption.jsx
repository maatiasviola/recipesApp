import { Image, TouchableOpacity, View } from "react-native"
import { COLORS, SIZES } from "../../constants"

const LoginOption = ({icon})=>{
  return(
    <TouchableOpacity
      style={{
        backgroundColor:COLORS.gray10,
        borderRadius:SIZES.radius,
        width:60,
        height:60,
        marginRight:SIZES.radius,
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Image
        source={icon}
        style={{
          width:40,
          height:40,
          tintColor:COLORS.primary
        }}
      />
    </TouchableOpacity>
  )
}

export default LoginOption