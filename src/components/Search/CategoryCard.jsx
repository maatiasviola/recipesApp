import { ImageBackground, Text, TouchableOpacity } from "react-native"
import { COLORS, FONTS, SIZES, images } from "../../constants"

//Card utilizada para cada categoria screen "Search"

const CategoryCard = ({category,containerStyle,onPress})=>{
  return(
    <TouchableOpacity
      onPress={onPress}
    >
      <ImageBackground
        source={category?.thumbnail || images.bg_1}
        resizeMode="cover"
        style={{
          height:150,
          width:200,
          paddingVertical:SIZES.padding,
          paddingHorizontal:SIZES.radius,
          justifyContent:'flex-end',
          ...containerStyle
        }}
        imageStyle={{
          borderRadius:SIZES.radius
        }}
      >
        <Text
          style={{
            color:COLORS.white,
            ...FONTS.h2
          }}
        >
          {category?.descripcion}
        </Text>

      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CategoryCard