import { Animated, View } from "react-native"

const HEADER_HEIGHT=350;

const RecipeCardHeader = ({recipe,scrollY})=>{
  return(
    <View style={{alignItems:'center',overflow:'hidden'}}>
      <Animated.Image
        source={recipe?.image}
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
    </View>
  )
}

export default RecipeCardHeader