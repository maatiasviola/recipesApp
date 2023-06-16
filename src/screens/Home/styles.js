import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:COLORS.white
    },
    categoriesContainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
      marginHorizontal:SIZES.padding
    }
})

export default styles