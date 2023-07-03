import { Text,Image,View } from "react-native"
import { images } from "../../constants"
import { TouchableOpacity } from "react-native"
import styles from './styles'

const CardPasoSeleccionado = ({paso,onPress}) =>{
  return(
    <View style={styles.container}>
      <Image style={styles.pasoImage} source={paso?.multimedias[0]}/>
      <View style={styles.pasoInfo}>
        <Text style={styles.titulo}>Paso {paso?.nroPaso}</Text>
        <Text style={styles.descripcion}>{paso?.texto}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.deleteIconContainer}>
        <Image source={images.x} style={styles.deleteIcon}/>
      </TouchableOpacity>
    </View>
  )
}

export default CardPasoSeleccionado
