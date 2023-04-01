import { FlatList,View,Text,TouchableOpacity, SafeAreaView,StyleSheet } from "react-native"
import { dummyData, SIZES,FONTS, COLORS } from "../constants"
import CategorieCard from "../components/Home/CategorieCard"
import MyRecipesTab from "../components/Home/MyRecipesTab"
import SearchInput from "../components/SearchInput"
import TrendingRecipesList from "../components/Home/TrendingRecipesList"
import WelcomeTab from "../components/Home/WelcomeTab"

//Pagina Home

const Home = ({navigation})=>{
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
          <TrendingRecipesList/>
          
          <View
            style={styles.categoriesContainer}
          >
            <Text style={{...FONTS.h2, flex:1}}>
              Categories
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
              <Text 
                style={{
                  color:COLORS.gray,
                  ...FONTS.body4
                }}
              >
                View all
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