import { useState } from "react"
import { ScrollView, StyleSheet, View,Text, FlatList } from "react-native"
import CategoryCard from "../components/CategoryCard"
import SearchInput from "../components/SearchInput"
import TextButton from "../components/TextButton"
import { COLORS, dummyData, FONTS, SIZES } from "../constants"
import { useNavigation } from "@react-navigation/native"

const Search = ()=>{
  const [activeTopSearch,setActiveTopSearch]=useState(dummyData.top_searches[0].label)
  const navigation=useNavigation()
  
  return(
    <View style={styles.container}>
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
            style={{
              marginHorizontal:SIZES.padding,
              ...FONTS.h2
              }}
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
                active={item.label===activeTopSearch}
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
                  backgroundColor:COLORS.gray10
                }}
                labelStyle={{
                  color:COLORS.gray50,
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
          <Text style={{...FONTS.h2,marginHorizontal:SIZES.padding}}>Browse Categories</Text>
          
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
  }
})

export default Search