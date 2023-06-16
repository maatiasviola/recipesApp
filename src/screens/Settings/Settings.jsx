// CSS & Constants
import styles from './styles'

// Components
import { View, ScrollView } from "react-native"
import { ProfileSection1,ProfileSection2 } from "../../components/Settings/ProfileSections"
import ProfileCard from "../../components/Settings/ProfileCard"
import SettingsHeader from "../../components/Settings/SettingsHeader"

const Settings = () => {
  return(
    <View style={styles.container}>
      
      <SettingsHeader/>
      
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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

export default Settings