import { createRef, useEffect, useRef, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { dummyData, FONTS, SIZES } from "../constants"

const RecipeTabs=({scrollX})=>{
  const [measureLayout,setMeasureLayout]=useState([])
  const containerRef=useRef()
  const recipe_details_tabs = dummyData.recipe_details_tabs.map(item=>({
      ...item,
      ref: createRef()
  }))

  useEffect(()=>{
    let ml = []

    recipe_details_tabs.forEach(item=>{
      item?.ref?.current?.measureLayout(
        containerRef.current,
        (x,y,width,height)=>{
          ml.push({
            x,y,width,height
          })
        
          if(ml.length===item.length){
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

export default RecipeTabs