import { View,Image,Text, TouchableOpacity } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../constants"

const RecipeStepCard = ({step,setSelectedStep,setStepModalVisible})=>{
  const handleChangeSelectedStep = () =>{
    setSelectedStep(step)
    console.log("Paso Seleccionado: ",step)
    setStepModalVisible(true)
  }
  return(
    <TouchableOpacity onPress={handleChangeSelectedStep}>
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
        source={step?.multimedias[0]}
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
          Paso {step?.nroPaso}
        </Text>
      </View>

    </View>
    </TouchableOpacity>
  )
}

export default RecipeStepCard