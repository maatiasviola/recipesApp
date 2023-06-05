import { COLORS } from "../constants"
import { View,Image,StyleSheet } from "react-native"

const TabIcon = ({focused,icon})=>{
  return(
    <View style={styles.container}>
    
      <Image 
        source={icon} 
        style={{
          width:30,
          height:30,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime
        }} 
      />
      
      {focused &&
        <View
          style={styles.line}
        />
      }
    
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    height:80,
    width:50
  },
  image:{
    width:30,
    height:30,
  },
  line:{
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    height:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor:COLORS.darkGreen
  }
})

export default TabIcon