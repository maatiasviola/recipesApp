import { useNavigation } from "@react-navigation/native"
import { useRef,useState,useEffect,createRef, useCallback } from "react"
import { Text, View,Animated,TouchableOpacity, Keyboard, ImageBackground, Image } from "react-native"
import IconButton from "../components/IconButton"
import LineDivider from "../components/LineDivider"
import { COLORS, dummyData, SIZES,FONTS, icons } from "../constants"
import RecipeDiscussions from "./RecipeTabs/RecipeDiscussions"
import RecipeIngredients from "./RecipeTabs/RecipeIngredients"
import RecipeSteps from "./RecipeTabs/RecipeSteps"

// Toda la informacion sobre una receta unica 
// (imagen, ingredientes, pasos y discusiones)

const recipe_details_tabs = dummyData.recipe_details_tabs.map(item=>({
  ...item,
  ref: createRef()
}))

const RecipeTabs=({scrollX,onTabPress})=>{
  const [measureLayout,setMeasureLayout]=useState([])
  const containerRef=useRef()

  useEffect(()=>{
    let ml = []

    recipe_details_tabs.forEach(item=>{
      item?.ref?.current?.measureLayout(
        containerRef.current,
        (x,y,width,height)=>{
          ml.push({
            x,y,width,height
          })
        
          if(ml.length===recipe_details_tabs.length){
            setMeasureLayout(ml)
          }
        }
      )
    })
  },[containerRef.current])

  return(
    <View
      ref={containerRef}
      style={{
        flex:1,
        flexDirection:'row'
      }}
    >
      {/* Tab Indicator */}
      {measureLayout.length > 0 && <TabIndicator 
      measureLayout={measureLayout} scrollX={scrollX}/>}
   
      {/* Tabs */}
      {recipe_details_tabs.map((item,index)=>{
        return(
          <TouchableOpacity
            key={index}
            ref={item.ref}
            style={{
              flex:1,
              paddingHorizontal:15,
              alignItems:'center',
              justifyContent:'center'
            }}
            onPress={()=>{
              Keyboard.dismiss()
              onTabPress(index)
              }
            }
          >
            <Text
              style={{
                ...FONTS.h3,
                fontSize:SIZES.height > 800 ? 18 : 17
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const TabIndicator = ({measureLayout,scrollX})=>{
  
  const inputRange = dummyData.recipe_details_tabs.map((_,i)=>i*SIZES.width)
  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange:measureLayout.map(measure=>measure.width)
  })

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange:measureLayout.map(measure=>measure.x)
  })
  return(
    <Animated.View
      style={{
        position:'absolute',
        bottom:0,
        height:4,
        width:tabIndicatorWidth,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.primary,
        transform:[{
          translateX
        }]
      }}
    />
  )
}

const RecipeDetails = ({route})=>{
  const navigation = useNavigation()
  const [selectedRecipe,setSelectedRecipe] = useState(null)
  
  useEffect(()=>{
    const {recipe}=route.params
    setSelectedRecipe(recipe)
  },[])
  
  const flatListRef=useRef()
  const scrollX=useRef(new Animated.Value(0)).current

  const onTabPress=useCallback(tabIndex=>{
    flatListRef?.current?.scrollToOffset({
      offset:tabIndex*SIZES.width
  })
  }) 

  return(
    <View
      style={{
        flex:1,
        backgroundColor:COLORS.white
      }}
    >

      {/* Header Bar */}
      <View
        style={{
          flexDirection:'row',
          position:'absolute',
          top:SIZES.height > 800 ? 40 : 20,
          left:0,
          right:0,
          paddingHorizontal:SIZES.padding,
          zIndex:1
        }}
      >
        <>
          {/* Back */}
          <View
            style={{
              flex:1
            }} 
          >
            <IconButton
              icon={icons.back2}
              iconStyle={{
                width:25,
                height:25,
                tintColor:COLORS.black
              }}
              containerStyle={{
                width:40,
                height:40,
                alignItems:'center',
                justifyContent:'center',
                borderRadius:20,
                backgroundColor:COLORS.white
              }}
              onPress={()=>navigation.goBack()}
            />
          </View>
          
          {/* Share & Favourite */}
          <View 
            style={{
              flexDirection:'row'
            }}
          >
            <IconButton
              icon={icons.media}
              iconStyle={{
                tintColor:COLORS.white
              }}
              containerStyle={{
                width:50,
                height:50,
                alignItems:'center',
                justifyContent:'center'
              }}
            />
            <IconButton
              icon={icons.bookmark}
              iconStyle={{
                tintColor:COLORS.white
              }}
              containerStyle={{
                width:50,
                height:50,
                alignItems:'center',
                justifyContent:'center'
              }}
            />
          </View>
        </>
      </View>

      {/* Image Section */}
      <View
        style={{
          height:SIZES.height>800 ? 220 : 200,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:COLORS.gray90
        }}
      >
        {/* Miniatura */}
        <ImageBackground
          source={selectedRecipe?.image}
          style={{
            width:'100%',
            height:'100%',
            alignItems:'center',
            justifyContent:'center'
          }}
        />
      </View>

      {/* Tabs */}
      <View
        style={{
          height:60
        }}
      >
        <RecipeTabs
          scrollX={scrollX}
          onTabPress={onTabPress}  
        />
      </View>

      {/* Line Divider */}
      <LineDivider
        lineStyle={{
          backgroundColor:COLORS.gray20
        }}
      />

      {/* Content */}
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        snapToInterval={SIZES.width}
        decelerationRate='fast'
        keyboardDismissMode='on-drag'
        showsHorizontalScrollIndicator={false}
        data={dummyData.recipe_details_tabs}
        keyExtractor={item=>item.id}
        onScroll={
          Animated.event([
            {nativeEvent:{contentOffset:{
              x:scrollX
            }}}
          ], {
              useNativeDriver:false
          })
        }
        renderItem={({item,index})=>{
          return(
            <View style={{width:SIZES.width}}>
              {index == 0 && <RecipeSteps selectedRecipe={selectedRecipe}/>}
              {index == 1 && <RecipeIngredients selectedRecipe={selectedRecipe}/>}
              {index == 2 && <RecipeDiscussions selectedRecipe={selectedRecipe}/>}
            </View>
          )
        }}
      />

      
    </View>
  )
}

export default RecipeDetails