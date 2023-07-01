import { useContext } from "react"
import UserContext from "../../Context/UserContext"
import recetasService from "../../Servicios/recetas"
import { useState } from "react"
import { View } from "react-native"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { icons, images } from "../../constants"
import { StyleSheet } from "react-native"
import TextButton from "../../components/TextButton"
import { useNavigation } from "@react-navigation/native"

const ValorarReceta = ({receta})=>{
  console.log(receta)

  const navigation = useNavigation()
  const [rating,setRating] = useState(2)
  const [maxRating,setMaxRating] = useState([1,2,3,4,5])

  const {user} = useContext(UserContext)

  const handleValorar = () =>{
    console.log("Rating:",rating)
    recetasService.valorarReceta(user.idUsuario,receta.id,rating)
      .then(response=>{
        console.log("Exito!")
        navigation.goBack();
      })
      .catch(error=>console.log(error))
  }

  return(
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item)=>{
        return(
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={()=>setRating(item)}
          >
            <Image
              style={styles.starImgStyle}
              source={
                item<=rating
                  ? {uri:icons.star_filled}
                  : {uri:icons.star_corner}
              }
            />
          </TouchableOpacity>
        )
      })}
      <TextButton
        value="Valorar receta"
        onPress={handleValorar}
        containerStyle={{
            height:55,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary,
            marginTop:20
        }}
        labelStyle={{
          ...FONTS.h3,
          color:COLORS.white
        }}
      />
    </View>
  )
}

export default ValorarReceta

const styles = StyleSheet.create({
  customRatinBarStyle:{
    justifyContent:'center',
    flexDirection:'row',
    marginTop:30,
  },
  starImgStyle:{
    width:40,
    height:40,
    resizeMode:'cover'
  }
})