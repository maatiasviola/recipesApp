import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
import dummyData from '../../constants/dummyData'
import { useContext } from 'react'

// Context
import UserContext from '../../Context/UserContext'

//Tarjeta de usuario (foto,nombre,info y boton para volverse miembro)

const ProfileCard = ()=>{
  const {user} = useContext(UserContext)

  return(
    <View style={styles.container}>
      
      {/* Profile Image */}
      <TouchableOpacity
        style={{
          width:80,
          height:80
        }}
      >
        <Image 
          source={user.avatar || images.defaultUser} 
          style={styles.profileImage}
        />

        <View style={styles.cameraContainer}>
          <View
            style={{
              width:30,
              height:30,
              marginBottom:-15,
              alignItems:'center',
              justifyContent:'center',
              borderRadius:15,
              backgroundColor:COLORS.primary
            }}
          >
            <Image 
              source={icons.camera}
              resizeMode='contain'
              style={{
                width:17,
                height:17
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* Details Section */}
      <View style={styles.infoContainer}>
        <Text style={{...FONTS.h2, color:COLORS.white}}>{user.nombre}</Text>
        <Text style={{...FONTS.body4,color:COLORS.white}}>Más información</Text>
        
        {/* Become Member Button */}
        <View style={styles.memberContainer}>
          <Text style={{color:COLORS.primary,...FONTS.h3}}>+ Hazte miembro</Text>
        </View>
      
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop:SIZES.padding,
    paddingHorizontal:SIZES.radius,
    paddingVertical:20,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.primary3
  },
  profileImage:{
    width:'100%',
    height:'100%',
    borderRadius:40,
    borderColor:COLORS.white,
    borderWidth:1
  },
  cameraContainer:{
    position:'absolute',
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  infoContainer:{
    flex:1,
    marginLeft:SIZES.radius,
    alignItems:'flex-start'
  },
  memberContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:35,
    borderRadius:20,
    backgroundColor:COLORS.white,
    paddingHorizontal:SIZES.radius,
    marginTop:SIZES.padding
  }
})

export default ProfileCard