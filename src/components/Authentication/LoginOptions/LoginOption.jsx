// CSS & Constants
import styles from './styles'
import { COLORS, SIZES, icons } from "../../../constants"

// Components
import { View,Text } from "react-native"
import IconButton from "../../IconButton"

{/* Este componente solo renderiza los botones para inicio de sesion (NO TOCAR) */}

const LoginOption = ()=>{
  return(
    <>
      {/* Or login with ... */}
      <View style={styles.container}>
        <Text style={styles.headerText}>
          O ingresa con
        </Text>
        
        {/* Icons */}
        <View
          style={styles.iconsContainer}
        >
          <IconButton
            icon={icons.twitter}
            iconStyle={{
              tintColor:COLORS.black
            }}
            containerStyle={
              styles.socialButtonsContainer
            }
          />
          <IconButton 
            icon={icons.google}
            iconStyle={{
              tintColor:COLORS.black
            }}
            containerStyle={{
              ...styles.socialButtonsContainer,
              marginLeft:SIZES.radius
            }}
          />
          <IconButton 
            icon={icons.linkedin}
            iconStyle={{
              tintColor:COLORS.black
            }}
            containerStyle={{
              ...styles.socialButtonsContainer,
              marginLeft:SIZES.radius
            }}
          />
      </View>
    </View>  
  </>
  )
}

export default LoginOption