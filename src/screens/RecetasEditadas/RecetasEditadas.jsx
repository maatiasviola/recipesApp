import { Text } from "react-native"
import recetasService from "../../Servicios/recetas"
import { useEffect } from "react"

const RecetasEditadas = ()=>{
  const [recetas,setRecetas] = useState([])

  useEffect(()=>{
    recetasService.recuperarRecetasDispositivo()
      .then(response=>setRecetas(response))
  },[])

  return(
    <>
      <View style={styles.container}>
        {
          recetasIntentar.length === 0
            ? <Text>No tenes recetas modificadas</Text>
            : (
              <>
                {/* Results */}
                <FlatList
                data={recetas}
                keyExtractor={item=>item.id}
                contentContainerStyle={{
                  paddingHorizontal:SIZES.padding
                }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardDismissMode="on-drag"
                renderItem={({item,index})=>(
                  <HorizontalRecipeCard
                    recipe={item}
                    containerStyle={{
                      marginVertical:SIZES.padding,
                      marginTop: index==0? SIZES.radius:SIZES.padding
                    }}
                    onPress={()=>navigation.navigate("RecipeDetails",{recipe:item})}
                  />
                )}
                ItemSeparatorComponent={()=>(
                  <LineDivider
                    lineStyle={{
                      backgroundColor:COLORS.gray20
                    }}
                  />
                )}
                />

                {/* Header */}
                <View style={styles.header}>

                {/* Background image */}
                <Image
                  source={images.bg_1}
                  resizeMode="cover"
                  style={styles.headerBackgroundImageStyle}
                />

                {/* Title */}
                <View style={styles.title}>
                  <Text style={styles.headerTitle}>
                    Modificadas
                  </Text>
                </View>

                {/* Back button */}
                <TouchableOpacity 
                  style={styles.iconContainer} 
                  onPress={()=>navigation.goBack()}
                >
                  <Image 
                    source={icons.back2} 
                    resizeMode="contain"
                    style={styles.backButton}  
                  />
                </TouchableOpacity>
                </View>
              </>
            )
          }
      </View>
    </>
  )
}

export default RecetasEditadas