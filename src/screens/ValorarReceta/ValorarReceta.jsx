import { useContext, useEffect } from "react"
import UserContext from "../../Context/UserContext"
import recetasService from "../../Servicios/recetas"
import { useState } from "react"
import { View } from "react-native"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { COLORS, FONTS, SIZES, icons, images } from "../../constants"
import { StyleSheet } from "react-native"
import TextButton from "../../components/TextButton"
import { useNavigation } from "@react-navigation/native"

const ValorarReceta = ({route})=>{
  const {receta}=route.params

  const navigation = useNavigation()
  const [rating,setRating] = useState(2)
  const [maxRating,setMaxRating] = useState([1,2,3,4,5])

  const {user} = useContext(UserContext)

  useEffect(()=>{
    recetasService.obtenerValoracionRecetaUsuario(user.idUsuario,receta.idReceta)
      .then((response)=>{
        setRating(response)
      })
      .catch(error=>console.log(error))
  },[])

  const handleValorar = () =>{
    recetasService.valorarReceta(user.idUsuario,receta.idReceta,rating)
      .then(response=>{
        console.log("Exito!")
        navigation.goBack();
      })
      .catch(error=>console.log(error))
  }

  return(
    <View style={{gap:10}}>
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
      </View>
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
  customRatingBarStyle:{
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