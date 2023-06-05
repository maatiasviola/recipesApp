import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import HorizontalRecipeCard from "../components/RecipesListing/HorizontalRecipeCard"
import IconButton from "../components/IconButton"
import LineDivider from "../components/LineDivider"
import { COLORS, dummyData, FONTS, icons, SIZES } from "../constants"

//Pagina resultados de busqueda

const RecipesListing = ({navigation,route})=>{
  const {category} = route.params

  return(
    <View
      style={styles.container}
    >

      {/* Results */}
      <FlatList
        data={dummyData.trendingRecipes}
        keyExtractor={item=>item.id}
        contentContainerStyle={{
          paddingHorizontal:SIZES.padding
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        ListHeaderComponent={
          <View
            style={{
              flexDirection:'row',
              alignItems:'center',
              marginTop:270,
              marginBottom:SIZES.base
            }}
          > 
            {/* Results */}
            <Text
              style={{
                flex:1,
                ...FONTS.body3
              }}
            >
              8,564 results
            </Text>

            {/* Filter Button */}
            <IconButton
              icon={icons.filter}
              iconStyle={{
                width:20,
                height:20
              }}
              containerStyle={{
                width:40,
                height:40,
                alignItems:'center',
                justifyContent:'center',
                borderRadius:10,
                backgroundColor:COLORS.primary
              }}
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
          source={category?.thumbnail}
          resizeMode="cover"
          style={{
            width:'100%',
            height:'100%',
            borderBottomLeftRadius:60
          }}
        />

        {/* Title */}
        <View style={styles.title}>
          <Text
            style={{
              position:'absolute',
              color:COLORS.white,
              ...FONTS.h1
            }}
          >
            {category?.title}
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
            style={{
              width:30,
              height:30,
              tintColor:COLORS.black
            }}  
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  header:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height:250,
    overflow:'hidden'
  },
  title:{
    position:'absolute',
    bottom:70,
    left:30
  },
  iconContainer:{
    position:'absolute',
    top:40,
    left:20,
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    backgroundColor:COLORS.white
  }
  
})

export default RecipesListing