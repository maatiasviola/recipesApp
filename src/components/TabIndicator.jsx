import { Animated } from "react-native"
import { COLORS, dummyData, SIZES } from "../constants"

const TabIndicator = ({measureLayout,scrollX})=>{
  
  const inputRange = dummyData.recipe_details_tabs.map((_,i)=>i*SIZES.width)
  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange:measureLayout.map(measure=>measure.width)
  })

  const transalateX = scrollX.interpolate({
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

export default TabIndicator