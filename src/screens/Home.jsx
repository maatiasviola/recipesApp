import { FlatList,View,Text,TouchableOpacity, SafeAreaView,StyleSheet } from "react-native"
import { dummyData, SIZES,FONTS, COLORS } from "../constants"
import CategorieCard from "../components/Home/CategorieCard"
import MyRecipesTab from "../components/Home/MyRecipesTab"
import SearchInput from "../components/SearchInput"
import TrendingRecipesList from "../components/Home/TrendingRecipesList"
import WelcomeTab from "../components/Home/WelcomeTab"
<<<<<<< HEAD
=======
import { useEffect, useState } from "react"
import axios from 'axios'
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf

//Pagina Home

const Home = ({navigation})=>{
<<<<<<< HEAD
=======
  const [ultimasRecetas,setUltimasRecetas]=useState()
  useEffect(()=>{

    axios.get('http://localhost:8080/Recetas/Controller/ultimasTresRecetas')
    .then(response => {
      // Aquí puedes manejar la respuesta de la API, que debe ser el objeto de usuario
      const ultimasRecetasResponse = response.data;
      console.log(ultimasRecetasResponse); // Puedes mostrarlo en la consola o guardarlo en el estado de tu componente
      setUltimasRecetas(ultimasRecetasResponse)
    })
    .catch(error => {
      // Manejar errores de la solicitud o del servidor
      console.error(error);
    });

  },[])
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
  return(
    <SafeAreaView style={styles.container}>

    <FlatList
      data={dummyData.categories}
      keyExtractor={categorie=>categorie.id}
      keyboardDismissMode='on-drag'
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View>
          <WelcomeTab/>
          <SearchInput/>
          <MyRecipesTab/>
<<<<<<< HEAD
          <TrendingRecipesList/>
=======
          <TrendingRecipesList ultimasRecetas={ultimasRecetas}/>
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
          
          <View
            style={styles.categoriesContainer}
          >
            <Text style={{...FONTS.h2, flex:1}}>
<<<<<<< HEAD
              Categories
=======
              Categorias
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
              <Text 
                style={{
                  color:COLORS.gray,
                  ...FONTS.body4
                }}
              >
<<<<<<< HEAD
                View all
=======
                ver todo
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  categoriesContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
    marginHorizontal:SIZES.padding
  },
})

export default Home