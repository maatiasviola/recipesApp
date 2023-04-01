import { StyleSheet, Text, TouchableOpacity,View,Image } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../../constants"

//Unidad que compone el componente ProfileSections

const ProfileValue=({icon,label,value,onPress})=>{
  return(
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      {/* Icon */}
      <View 
        style={styles.iconContainer}
      >
        <Image 
          source={icon}
          resizeMode='contain'
          style ={styles.icon}
        />
      </View>

      {/* Label & Value */}
      <View style={styles.textContainer}>
        {label &&
          <Text 
            style={{
              color:COLORS.gray30,
              ...FONTS.body3
            }}
          >
            {label}
          </Text>
        }

        <Text 
          style={{
            ...FONTS.h3
          }}
        >
          {value}
        </Text>
      </View>

      {/* Icon*/}
      <Image
        source={icons.rightArrow2}
        style={{
          width:15,
          height:15
        }}
      />
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    height:80,
    alignItems:'center'
  },
  iconContainer:{
    backgroundColor:COLORS.additionalColor11,
    borderRadius:20,
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  icon:{
    width:25,
    height:25,
    tintColor:COLORS.primary
  },
  textContainer:{
    flex:1,
    marginLeft:SIZES.radius
  },
  rightArrowContainer:{
    alignItems:'flex-end',
    justifyContent:'center'
  }
})

export default ProfileValue