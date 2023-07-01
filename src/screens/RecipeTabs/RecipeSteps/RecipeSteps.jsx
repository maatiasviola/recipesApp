// CSS & Constants
import styles from './styles'
import { FONTS, icons, SIZES } from "../../../constants"
import dummyData from '../../../constants/dummyData'

// Services
import recetasService from '../../../Servicios/recetas'

// Components
import { Image, Text, View } from "react-native"
import LineDivider from "../../../components/LineDivider"
import RecipeStepCard from "../../../components/RecipeStepCard"
import TextButton from "../../../components/TextButton"
import { FloatingAction } from 'react-native-floating-action'

const RecipeSteps = ({selectedRecipe}) =>{
  const acciones = [
    {
      text: 'Valorar Receta',
      icon: icons.valorar,
      name: 'Valorar',
      position: 1
    },
    {
      text: 'Guardar Receta',
      icon: icons.guardar,
      name: 'Guardar',
      position: 2
    }
  ];
  return(
    <>
      <FloatingAction
        actions={acciones}
        onPressItem={(name) => {
          if (name === 'Valorar') {
            navigation.navigate('ValorarReceta',{receta:selectedRecipe})
          }else if(name === 'Guardar'){
            recetasService.guardarRecetaDispositivo(selectedRecipe)
              .then(response=>{
                console.log(response)
                console.log("Receta guardada con exito")
              })
              .catch(error=>console.log(error))
          }
        }}
      />
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          
          {/*Title */}
          <Text style={styles.headerTitle}>
            {selectedRecipe?.name}
          </Text>
          
          {/* Info */}
          <View style={styles.headerInfo}>
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center'
              }}
            >
              <Image 
                source={icons.servings} 
                style={styles.headerInfoIcon}
              />
              <Text style={styles.headerInfoText}>
                {selectedRecipe?.serving} Servings
              </Text>
            </View>
            
            <View style={styles.headerInfoIconContainer}>
              <Image 
                source={icons.time} 
                style={styles.headerInfoIcon}
              />
              <Text style={styles.headerInfoText}>
                {selectedRecipe?.duration}
              </Text>
            </View>
          </View>

          {/* Chef card */}
          <View style={styles.chefCardContainer}>
            <Image 
              source={selectedRecipe?.author.profilePic}
              style={styles.chefPhoto}
            />

            {/* Nombre Autor */}
            <View style={styles.authorContainer}>
              <Text style={styles.authorName}>
                {selectedRecipe?.author.name}
              </Text>
            </View>
            <TextButton
              value="Follow +"
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
          {dummyData?.recipe_details?.videos
            .map((item,index)=><RecipeStepCard step={item} key={index}/>)
          }
        </View>
      </View>
    </>
  )
}

export default RecipeSteps