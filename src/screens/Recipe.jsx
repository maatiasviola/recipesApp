import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native"
import HeaderBar from "../components/HeaderBar";
import IngredientCard from "../components/IngredientCard";
import RecipeCreatorCardInfo from "../components/RecipeCreatorCardInfo";
import RecipeInfo from "../components/RecipeInfo";
import { COLORS, FONTS } from "../constants";

const Recipe = ({navigation,route})=>{

  const [selectedRecipe,setSelectedRecipe] = useState(null)
  const HEADER_HEIGHT=350;
  const scrollY = useRef(new Animated.Value(0)).current

  useEffect(()=>{
    const {recipe}=route.params
    setSelectedRecipe(recipe)
  },[])

  return(
    <View style={styles.container}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={ingredient=>ingredient.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={{alignItems:'center',overflow:'hidden',marginTop:-1000,paddingTop:1000}}>
              <Animated.Image
                source={selectedRecipe?.image}
                resizeMode='contain'
                style={{
                  height:HEADER_HEIGHT,
                  width:'200%',
                  transform:[
                    {
                      translateY: scrollY.interpolate({
                      inputRange:[-HEADER_HEIGHT,0,HEADER_HEIGHT],
                      outputRange:[-HEADER_HEIGHT/2,0,HEADER_HEIGHT*0.75]
                      })
                    },
                    {
                      scale:scrollY.interpolate({
                      inputRange:[-HEADER_HEIGHT,0,HEADER_HEIGHT],
                      outputRange:[2,1,0.75]
                      })
                    }
                  ]
                }}
              />
              <Animated.View
                style={{
                  position:'absolute',
                  bottom:10,
                  right:30,
                  left:30,
                  height:80,
                  transform:[
                    {
                      translateY:scrollY.interpolate({
                      inputRange:[0,170,250],
                      outputRange:[0,0,100],
                      extrapolate:'clamp'
                      })
                    }
                  ]
                }}
              >
                <RecipeCreatorCardInfo selectedRecipe={selectedRecipe}/>
              </Animated.View>
            </View>
            <RecipeInfo selectedRecipe={selectedRecipe}/>
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent:{contentOffset:{y:scrollY}}}
        ], {useNativeDriver:true})}
        renderItem={({item:ingredient})=>(
          <IngredientCard scrollY={scrollY} ingredient={ingredient}/>
        )}
      />
      <HeaderBar/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  }
})

export default Recipe