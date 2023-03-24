import { StyleSheet, Text, View,Image, ScrollView, SafeAreaView } from "react-native"
import { ProfileSection1,ProfileSection2 } from "../components/Settings/ProfileSections"
import ListOfSettings from "../components/Settings/ProfileSections"
import ProfileCard from "../components/Settings/ProfileCard"
import SettingsHeader from "../components/Settings/SettingsHeader"
import { COLORS, FONTS, icons, SIZES } from "../constants"

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
        <ProfileSection1/>
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