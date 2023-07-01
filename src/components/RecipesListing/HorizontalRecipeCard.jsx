import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../../constants"

const HorizontalRecipeCard = ({containerStyle,recipe,onPress})=>{
  return(
    <TouchableOpacity
      style={{
        flexDirection:'row',
        ...containerStyle
      }}
      onPress={onPress}
    >
      {/* Miniatura */}
      <ImageBackground
        source={recipe?.foto.urlFoto}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{
          borderRadius:SIZES.radius
        }}
      >
        {/* Bookmark */}
        <View style={styles.info}>
          <Image
            source={recipe.isBookmark? icons.bookmarkFilled : icons.bookmark}
            resizeMode="contain"
            style={{
              width:20,
              height:20,
              tintColor:COLORS.darkGreen
            }}
          />
        </View>
      </ImageBackground>

      {/* Info */}
      <View
        style={{
          flex:1,
          marginLeft:SIZES.base
        }}
      >
        {/* Title */}
        <Text 
          style={{
            ...FONTS.h3,
            fontSize:18
          }}
        >
          {recipe?.nombre}
        </Text>

        {/* User & Duration */}
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            marginTop:SIZES.base
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color:COLORS.gray
            }}
          >
            Por {recipe?.nombreUsuario}
          </Text>
          <View
            style={{
              marginLeft:SIZES.base,
              flexDirection:'row',
              alignItems:'center'
            }}
          >
            <Image
              source={icons.time}
              style={{
                width:15,
                height:15,
                tintColor:COLORS.gray30
              }}
            />
            <Text
              style={{
                ...FONTS.body4,
                color:COLORS.gray30,
                marginLeft:SIZES.base
              }}
            >
              {recipe?.descripcion}
            </Text>
          </View>
        </View>

        {/* Rating */}
        <View 
          style={{
            flexDirection:'row',
            alignItems:'center',
            marginTop:SIZES.base
          }}
        >
          <Image
            source={icons.star}
            style={{
              width:15,
              height:15,
              tintColor:COLORS.primary2
            }}
          />
          <Text
            style={{
              marginLeft:5,
              color:COLORS.black,
              ...FONTS.h3,
            }}
          >
            {recipe?.valoracionGeneral}
          </Text>
        </View>
      </View>
    </TouchableOpacity>  
  )
}

const styles=StyleSheet.create({
  image:{
    width:130,
    height:130,
    marginBottom:SIZES.radius
  },
  info:{
    position:'absolute',
    top:10,
    right:10,
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    backgroundColor:COLORS.white
  }
})

export default HorizontalRecipeCard