import {View,Text} from 'react-native'

function Step({label,upadateStep}) {
  return (
    <View style={styles.stepBlock}>
      <View style={circleWrapper} onClick>
        <View style={styles.circle}>
        <Text>{label}</Text>

        </View>
      </View>
    </View>
  )
}

export default Step