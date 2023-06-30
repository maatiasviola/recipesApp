// CSS & Constants
import styles from './styles'
import { dummyData, SIZES } from "../../constants"

// Hooks
import { useNavigation } from "@react-navigation/native"

// Components
import { ScrollView, View,Text, FlatList } from "react-native"
import CategoryCard from "../../components/Search/CategoryCard"
import SearchInput from "../../components/SearchInput"

{/*Página de busqueda: buscador, top busquedas, categorias*/}

const Search = ()=>{

  const navigation=useNavigation()

  return(
    <View style={styles.container}>
      
      {/* Buscador */}
      <SearchInput/>
      
      <ScrollView
        contentContainerStyle={{
          paddingBottom:300
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode='on-drag'
      >
        
        {/* Browse Categories */}
        <View style={{marginTop:SIZES.padding}}>
          
          {/* Titulo */}
          <Text style={styles.subtitle}>
            Navegar categorias
          </Text>
          
          {/* Categorias */}
          <FlatList
            data={dummyData.categoriesSearch}
            numColumns={2}
            scrollEnabled={false}
            listKey='BrowseCategories'
            keyExtractor={item=>item.id}
            contentContainerStyle={{
              marginTop:SIZES.radius
            }}
            renderItem={({item,index})=>(
              <CategoryCard
                category={item}
                containerStyle={{
                  height:130,
                  width:(SIZES.width - (SIZES.padding*2) 
                  - SIZES.radius) /2,
                  marginTop:SIZES.radius,
                  marginLeft: (index+1) % 2 == 0
                    ? SIZES.radius
                    : SIZES.padding
                }}
                onPress={()=>navigation.navigate("RecipeListing",{categoria:item})}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Search