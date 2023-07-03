// CSS & Constants
import styles from './styles'
import { COLORS, dummyData, SIZES,FONTS, icons } from "../../constants"

// Hooks & Services
import { useNavigation } from "@react-navigation/native"
import { useRef,useState,useEffect,createRef, useCallback } from "react"
import recetasService from '../../Servicios/recetas'

// Components
import { Text, View,Animated,TouchableOpacity, Keyboard, ImageBackground } from "react-native"
import IconButton from "../../components/IconButton"
import LineDivider from "../../components/LineDivider"
import RecipeDiscussions from "../RecipeTabs/RecipeDiscussions/RecipeDiscussions"
import RecipeIngredients from "../RecipeTabs/RecipeIngredients/RecipeIngredients"
import RecipeSteps from "../RecipeTabs/RecipeSteps/RecipeSteps"
import { useContext } from 'react'
import UserContext from '../../Context/UserContext'

{/* 
    Informacion general sobre una receta (foto e iconos) 
    ingredientes, pasos y discusiones c/u tiene su componente especifico
*/}

{/* Esta parte maneja las solapas, el componente arranca abajo */}
const recipe_details_tabs = dummyData.recipe_details_tabs.map(item=>({
  ...item,
  ref: createRef()
}))

const RecipeTabs=({scrollX,onTabPress})=>{

  const [measureLayout,setMeasureLayout]=useState([])
  const containerRef=useRef()

  useEffect(()=>{
    let ml = []

    recipe_details_tabs.forEach(item=>{
      item?.ref?.current?.measureLayout(
        containerRef.current,
        (x,y,width,height)=>{
          ml.push({
            x,y,width,height
          })
        
          if(ml.length===recipe_details_tabs.length){
            setMeasureLayout(ml)
          }
        }
      )
    })
  },[containerRef.current])

  return(
    <View
      ref={containerRef}
      style={{
        flex:1,
        flexDirection:'row'
      }}
    >
      {/* Tab Indicator */}
      {measureLayout.length > 0 && <TabIndicator 
      measureLayout={measureLayout} scrollX={scrollX}/>}
   
      {/* Tabs */}
      {recipe_details_tabs.map((item,index)=>{
        return(
          <TouchableOpacity
            key={index}
            ref={item.ref}
            style={{
              flex:1,
              paddingHorizontal:15,
              alignItems:'center',
              justifyContent:'center'
            }}
            onPress={()=>{
              Keyboard.dismiss()
              onTabPress(index)
              }
            }
          >
            <Text
              style={{
                ...FONTS.h3,
                fontSize:SIZES.height > 800 ? 18 : 17
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const TabIndicator = ({measureLayout,scrollX})=>{
  
  const inputRange = dummyData.recipe_details_tabs.map((_,i)=>i*SIZES.width)
  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange:measureLayout.map(measure=>measure.width)
  })

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange:measureLayout.map(measure=>measure.x)
  })
  return(
    <Animated.View
      style={{
        position:'absolute',
        bottom:0,
        height:4,
        width:tabIndicatorWidth,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.primary,
        transform:[{
          translateX
        }]
      }}
    />
  )
}

{/* Este es el componente */}

const RecipeDetails = ({route})=>{

  const navigation = useNavigation()
  const {user} = useContext(UserContext)
  const [recetaGuardada,setRecetaGuardada] = useState(false)  
  const [selectedRecipe,setSelectedRecipe] = useState(null)
  
  useEffect(()=>{
    const {recipe}=route.params
    recetasService.conocerRecetaGuardadaPorUsuario(user.idUsuario,recipe.idReceta)
      .then(response=>{
        console.log(response)
        setRecetaGuardada(true)
      })
      .catch(error=>{
        console.log(error)
        setRecetaGuardada(false)
      })

    setSelectedRecipe(recipe)
  },[])

  const handleGuardarRecetaIntentar = () =>{
    recetasService.guardarEliminarReceta(user.idUsuario,selectedRecipe.idReceta)
      .then(response=>{
        console.log(response)
        if(response=='Receta Guardada'){
          setRecetaGuardada(true)
        }else{
          setRecetaGuardada(false)
        }
      })
      .catch(error=>{
        console.log(error)
      })
  }

  // Manejar solapas
  const flatListRef=useRef()
  const scrollX=useRef(new Animated.Value(0)).current

  const onTabPress=useCallback(tabIndex=>{
    flatListRef?.current?.scrollToOffset({
      offset:tabIndex*SIZES.width
    })
  }) 

  if(selectedRecipe===null){
    return <Text>Cargando...</Text>
  }

  return(
    <View style={styles.container}>

      {/* Header Bar */}
      <View style={styles.headerBar}>
        
        {/* Back Button */}
        <View style={{flex:1}}>
          <IconButton
            icon={icons.back2}
            iconStyle={styles.backButtonIconStyle}
            containerStyle={styles.backButtonContainerStyle}
            onPress={()=>navigation.goBack()}
          />
        </View>
        
        {/* Share & Favourite */}
        <View style={{flexDirection:'row'}}>
          
          {/* Valorar */}
          <IconButton
            icon={icons.star_filled}
            iconStyle={{tintColor:COLORS.white}}
            containerStyle={styles.shareFavouriteContainerStyle}
            onPress={()=>navigation.navigate("ValorarReceta",{receta:selectedRecipe})}
          />

          {/* Favourite */}
          <IconButton
            icon={recetaGuardada ? icons.bookmarkFilled : icons.bookmark }
            iconStyle={{tintColor:COLORS.white}}
            containerStyle={styles.shareFavouriteContainerStyle}
            onPress={handleGuardarRecetaIntentar}
          />
        </View>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        
        {/* Miniatura */}
        <ImageBackground
          source={selectedRecipe?.foto.urlFoto}
          style={styles.image}
        />
      </View>

      {/* Tabs */}
      <View
        style={{height:60}}>
        <RecipeTabs
          scrollX={scrollX}
          onTabPress={onTabPress}  
        />
      </View>

      {/* Line Divider */}
      <LineDivider
        lineStyle={{backgroundColor:COLORS.gray20}}
      />

      {/* Pasos, Ingredientes, Discusiones */}
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        snapToInterval={SIZES.width}
        decelerationRate='fast'
        keyboardDismissMode='on-drag'
        showsHorizontalScrollIndicator={false}
        data={dummyData.recipe_details_tabs}
        keyExtractor={item=>item.id}
        onScroll={
          Animated.event([
            {nativeEvent:{contentOffset:{
              x:scrollX
            }}}
          ], {
              useNativeDriver:false
          })
        }
        renderItem={({item,index})=>{
          return(
            <View style={{width:SIZES.width}}>
              {index == 0 && <RecipeSteps selectedRecipe={selectedRecipe}/>}
              {index == 1 && <RecipeIngredients setSelectedRecipe={setSelectedRecipe} 
                                                selectedRecipe={selectedRecipe}/>}
              {index == 2 && <RecipeDiscussions setSelectedRecipe={setSelectedRecipe} 
                                                selectedRecipe={selectedRecipe}/>}
            </View>
          )
        }}
      />
    </View>
  )
}

export default RecipeDetails