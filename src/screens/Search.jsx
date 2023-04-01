import { useState } from "react"
import { ScrollView, StyleSheet, View,Text, FlatList } from "react-native"
import CategoryCard from "../components/Search/CategoryCard"
import SearchInput from "../components/SearchInput"
import TextButton from "../components/TextButton"
import { COLORS, dummyData, FONTS, SIZES } from "../constants"
import { useNavigation } from "@react-navigation/native"

//Página de busqueda: buscador, top busquedas, categorias

const Search = ()=>{
  const [activeTopSearch,setActiveTopSearch]=useState(dummyData.top_searches[0].label)
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
        
        {/* Top Searches */}
        <View style={styles.topSearches}>
          <Text 
            style={styles.subtitle}
            >
            Top Searches
          </Text>
          <FlatList 
            horizontal
            data={dummyData.top_searches}
            listKey='TopSearches'
            keyExtractor={item=>item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop:SIZES.radius
            }}
            renderItem={({item,index})=>(
              <TextButton
                value={item.label}
                onPress={()=>setActiveTopSearch(item.label)}
                containerStyle={{
                  paddingVertical:SIZES.radius,
                  paddingHorizontal:SIZES.padding,
                  marginLeft:index==0 
                    ? SIZES.padding
                    : SIZES.radius,
                  marginRight:index==dummyData.top_searches.length-1 
                    ? SIZES.padding 
                    : 0,
                  borderRadius:SIZES.radius,
                  backgroundColor:item.label===activeTopSearch 
                    ? COLORS.primary 
                    : COLORS.gray10,
                }}
                labelStyle={{
                  color:item.label===activeTopSearch 
                  ? COLORS.white 
                  : COLORS.gray50,
                  ...FONTS.h3
                }}
              />
            )}
          />
        </View>

        {/* Browse Categories */}
        <View  
          style={{
            marginTop:SIZES.padding
          }}
        >
          <Text 
            style={styles.subtitle}
          >
            Browse Categories
          </Text>
          
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
                onPress={()=>navigation.navigate("RecipeListing",{category:item})}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  topSearches:{
    marginTop:SIZES.padding
  },
  buttonsContainer:{
    flexDirection:'row',
    alignItems:'center',
    flex:1
  },
  subtitle:{
    marginHorizontal:SIZES.padding,
    ...FONTS.h2
  }
})

export default Search