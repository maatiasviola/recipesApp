import { StyleSheet, View, ScrollView } from "react-native"
import { ProfileSection1,ProfileSection2 } from "../components/Settings/ProfileSections"
import ProfileCard from "../components/Settings/ProfileCard"
import SettingsHeader from "../components/Settings/SettingsHeader"
import { COLORS, SIZES } from "../constants"

const Settings = ()=>{
  return(
    <View style={styles.container}>
      <SettingsHeader/>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal:SIZES.padding,
          paddingBottom:150
        }}
      >
        {/* Profile Card */}
        <ProfileCard/>
        
        {/* Settings section 1 */}
        <ProfileSection1/>

        {/* Settings section 2 */}
        <ProfileSection2/>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  }
})

export default Settings