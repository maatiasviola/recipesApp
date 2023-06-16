import {View,Image,Text} from 'react-native'
import { FONTS, SIZES, icons } from '../constants'

function AlertMessage({mensaje,tipoMensaje,children}) {
  return (
    <View 
      style={{
        borderRadius:SIZES.radius,
        backgroundColor: tipoMensaje === "Error" ? '#FDEDED' : "#FFF4E5",
        border: "0.1rem solid " + tipoMensaje === "Error" ? '#F16360' : "##FFA117",
        marginTop:SIZES.radius,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
      }}
    >
      <Image
        style={{
          width:25,
          height:25,
          marginRight:SIZES.base
        }}
        source={tipoMensaje==="Error" ? icons.errorIcon : icons.warningIcon}
      />
      <View
        style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          flexGrow:1,
          flex:1,
        }}
      >
        <Text
          style={{
            ...FONTS.h4,
            fontSize: '16px',
            lineHeight: '22px',
            color: '#000000',
          }}
        >
          {mensaje}
        </Text>
        {children}
      </View>
    </View>
  )
}

export default AlertMessage