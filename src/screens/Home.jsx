import { FlatList,View,Text,TouchableOpacity, SafeAreaView,StyleSheet } from "react-native"
import { dummyData, SIZES,FONTS, COLORS } from "../constants"
import CategorieCard from "../components/CategorieCard"
import MyRecipesTab from "../components/MyRecipesTab"
import SearchInput from "../components/SearchInput"
import TrendingRecipesList from "../components/TrendingRecipes"
import WelcomeTab from "../components/WelcomeTab"

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
            style={{
              flexDirection:'row',
              alignItems:'center',
              marginTop:20,
              marginHorizontal:SIZES.padding
            }}
          >
            <Text style={{...FONTS.h2, flex:1}}>
              Categories
            </Text>

            <TouchableOpacity>
              <Text style={{color:COLORS.gray,...FONTS.body4}}>
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
          onPress={()=>navigation?.navigate("Recipe",{recipe:categorie})}
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
  }
})

export default Home