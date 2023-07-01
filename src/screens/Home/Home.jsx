// CSS & Constants
import styles from './styles'
import { dummyData, SIZES,FONTS, COLORS } from "../../constants"

// Hooks & Services
import { useEffect, useState } from "react"
import recetasService from '../../Servicios/recetas'

// Components
import { FlatList,View,Text,TouchableOpacity, SafeAreaView } from "react-native"
import CategorieCard from "../../components/Home/CategorieCard"
import MyRecipesTab from "../../components/Home/MyRecipesTab"
import SearchInput from "../../components/SearchInput"
import TrendingRecipesList from "../../components/Home/TrendingRecipesList"
import WelcomeTab from "../../components/Home/WelcomeTab"

// Axios
import axios from 'axios'

const Home = ({navigation})=>{

  // Ultimas 3 recetas
  const [ultimasRecetas,setUltimasRecetas]=useState([])

  useEffect(()=>{
    recetasService.obtenerTresUltimasRecetas()
    .then(response=>{
      console.log("TRES ULTIMAS: ",response)
      setUltimasRecetas(response)
    })
    .catch(error => {
      console.error(error);
    });
  },[])

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={categorie=>categorie.id}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <WelcomeTab/>
            <SearchInput/>
            <MyRecipesTab/>
            <TrendingRecipesList ultimasRecetas={ultimasRecetas}/>
            
            <View style={styles.categoriesContainer}>
              <Text style={{...FONTS.h2, flex:1}}>
                Categorias
              </Text>

              <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
                <Text 
                  style={{
                    color:COLORS.gray,
                    ...FONTS.body4
                  }}
                >
                  Ver todo
                </Text>
              </TouchableOpacity>
            </View>
          </>
        }
        renderItem={({item:categorie})=>
          <CategorieCard 
            categoryItem={categorie}
            containerStyle={{
              marginHorizontal:SIZES.padding
            }}
            onPress={()=>navigation?.navigate("RecipeDetails",{recipe:categorie})}
          />
        }
        ListFooterComponent={
          <View
            style={{marginBottom:100}}
          />
        }
      />
    </SafeAreaView>
  )
}

export default Home