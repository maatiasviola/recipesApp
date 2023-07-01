// CSS & Constants
import styles from './styles'
import { COLORS, dummyData, FONTS, icons, images, SIZES } from "../../constants"

// Hooks
import { useState } from 'react'

// Components
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native"
import HorizontalRecipeCard from "../../components/RecipesListing/HorizontalRecipeCard"
import IconButton from "../../components/IconButton"
import LineDivider from "../../components/LineDivider"
import FilterModal from '../../components/FilterModal'
import ModalPopUp from '../../components/ModalPopUp'

{/* Pagina resultados de busqueda */}

const RecipesListing = ({navigation,route})=>{
  const [resultados,setResultados] = useState(dummyData.trendingRecipes) // cuando este conectado con la bdd reemplazar useState([])
  
  const {nombre,categoria} = route.params

  const [filtrosVisible,setFiltrosVisible] = useState(false)

  {/* 
  useEffect(()=>{
    if(nombre){
      // realizar llamada por categoria
      // setResultados(response)
    }else if (categoria){
      // realizar llamada por categoria
      // setResultados(response)
    } else{
      setResultados([])
    }
  },[nombre,categoria])
*/}
  return(
    <>
      <ModalPopUp
        visible={filtrosVisible}
        setVisible={setFiltrosVisible}
        titulo="Filtros"  
      >
        <FilterModal/>
      </ModalPopUp>
      <View style={styles.container}>
        {/* Filter Modal */}

        {/* Results */}
        <FlatList
          data={resultados}
          keyExtractor={item=>item.id}
          contentContainerStyle={{
            paddingHorizontal:SIZES.padding
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          keyboardDismissMode="on-drag"
          ListHeaderComponent={
            <View style={styles.listHeaderContainer}> 
              {/* Results */}
              <Text
                style={{
                  flex:1,
                  ...FONTS.body3
                }}
              >
                {resultados.length} resultados
              </Text>

              {/* Filter Button */}
              <IconButton
                icon={icons.filter}
                iconStyle={{
                  width:20,
                  height:20
                }}
                containerStyle={styles.filterButtonContainerStyle}
                onPress={()=>setFiltrosVisible(true)}
              />
            </View>
          }
          renderItem={({item,index})=>(
            <HorizontalRecipeCard
              recipe={item}
              containerStyle={{
                marginVertical:SIZES.padding,
                marginTop: index==0? SIZES.radius:SIZES.padding
              }}
              onPress={()=>navigation.navigate("RecipeDetails",{recipe:item})}
            />
          )}
          ItemSeparatorComponent={()=>(
            <LineDivider
              lineStyle={{
                backgroundColor:COLORS.gray20
              }}
            />
          )}
        />

        {/* Header */}
        <View style={styles.header}>
          
          {/* Background image */}
          <Image
            source={categoria?.thumbnail || images.bg_1}
            resizeMode="cover"
            style={styles.headerBackgroundImageStyle}
          />

          {/* Title */}
          <View style={styles.title}>
            <Text style={styles.headerTitle}>
              {categoria?.title || nombre}
            </Text>
          </View>

          {/* Back button */}
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={()=>navigation.goBack()}
          >
            <Image 
              source={icons.back2} 
              resizeMode="contain"
              style={styles.backButton}  
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default RecipesListing