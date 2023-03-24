import { useRef,useState,useEffect,createRef, useCallback } from "react"
import { Text, View,Animated,FlatList,TouchableOpacity } from "react-native"
import LineDivider from "../components/LineDivider"
import { COLORS, dummyData, SIZES,FONTS } from "../constants"
import RecipeSteps from "./RecipeTabs/RecipeSteps"


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
            onPress={()=>onTabPress(index)}
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



const RecipeDetails = ()=>{

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
        flex:1
      }}
    >
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
              {index == 0 && <RecipeSteps/>}
              {index == 1 && <Text>Files</Text>}
              {index == 2 && <Text>Discussions</Text>}
            </View>
          )
        }}
      />

      
    </View>
  )
}

export default RecipeDetails