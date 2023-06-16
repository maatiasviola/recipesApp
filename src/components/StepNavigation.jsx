import {View,Text} from 'react-native'
import Step from './Step'
import styles from '../screens/Home/styles'

function StepNavigation({labelArray}) {
  return (
    <View style={styles.stepWrapper}>
      {labelArray.map((item,index)=><Step key={index} index={index} label={item}></Step>)}
    </View>
  )
}

export default StepNavigation