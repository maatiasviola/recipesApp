import { FlatList, Image, ScrollView, Text, View } from "react-native"
import CustomButton from "../../components/CustomButton"
import LineDivider from "../../components/LineDivider"
import RecipeStepCard from "../../components/RecipeStepCard"
import TextButton from "../../components/TextButton"
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
import dummyData, {recipe_details} from '../../constants/dummyData'

const RecipeSteps = ({selectedRecipe}) =>{

  return(
    <View
      style={{
        flex:1,
        backgroundColor:COLORS.white
      }}
    >
      {/* Header */}
      <View
        style={{
          paddingHorizontal:SIZES.padding,
          marginTop:SIZES.padding
        }}
      >
        {/*Title */}
        <Text style={{...FONTS.h2}}>
          {selectedRecipe?.nombre}
        </Text>
        {/* Info */}
        <View 
          style={{
            flexDirection:'row',
            marginTop:SIZES.base
          }}
        >
          <Text style={{...FONTS.body4,color:COLORS.gray30}}>{selectedRecipe?.descripcion}</Text>
          
          <View 
            style={{
              flexDirection:'row',
              alignItems:'center',
              marginLeft:SIZES.radius
            }}
          >
            <Image 
              source={icons.time} 
              style={{
                width:15,
                height:15,
                tintColor:COLORS.gray20
              }}
            />
            <Text style={{...FONTS.body4,color:COLORS.gray20,marginLeft:5}}>{selectedRecipe?.valoracion}</Text>
          </View>
        </View>
        {/* Chef card */}
        <View
          style={{
            flexDirection:'row',
            marginTop:SIZES.radius,
            alignItems:'center'
          }}
        >
          <Image source={images.UserProfile10}
            style={{
              width:50,
              height:50,
              borderRadius:25
            }}
          />
          <View 
            style={{
              marginLeft:SIZES.base,
              flex:1,
              justifyContent:'center'
            }}
          >
            <Text 
              style={{
                ...FONTS.h3,
                fontSize:18
              }}
            >
              {selectedRecipe?.nombreUsuario}
            </Text>
            <Text 
              style={{
                ...FONTS.body3
              }}
            >
              {selectedRecipe?.tipoUsuario}
            </Text>
          </View>
          <TextButton
            value="Seguir +"
            labelStyle={{
              ...FONTS.h3
            }}
            contentContainerStyle={{
              width:80,
              height:35,
              borderRadius:20
            }}
          />
        </View>
      </View>

      {/* Line Divider */}
      <LineDivider 
        lineStyle={{
          marginVertical:SIZES.radius,
          height:1
        }}
      />

      {/* Steps */}
      <View>
        {selectedRecipe?.pasos
          .map((item,index)=><RecipeStepCard step={item} key={index}/>)
        }
      </View>
    </View>
  )
}

export default RecipeSteps