// CSS & Constants
import styles from './styles'
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../../constants"

// Hooks & Services
import { useContext, useEffect, useState } from "react"
import comentariosService from '../../../Servicios/comentarios'

// Context
import UserContext from '../../../Context/UserContext'

// Components
import { FlatList, Text, View,TextInput, Keyboard } from "react-native"
import CommentSection from "../../../components/CommentSection"
import IconButton from "../../../components/IconButton"
import IconLabelButton from "../../../components/IconLabelButton"

const RecipeDiscussions= ({selectedRecipe,setSelectedRecipe})=>{
  const [nuevoComentario,setNuevoComentario] = useState("")

  // Posicionamiento del footer
  const [footerPosition,setFooterPosition] = useState(0)
  const [footerHeight,setFooterHeight]=useState(60)
  
  {/* Un use effect para el input del comentario */}
  useEffect(()=>{
    //Listen to keyboard
    const showSubscription = Keyboard.addListener(
      "keyboardWillShow",(e)=>{
        setFooterPosition(e.endCoordinates.height)
      }
    )
    
    const hideSubscription = Keyboard.addListener(
      "keyboardWillHide",(e)=>{
        setFooterPosition(0)
      }
    )

    return()=>{
      showSubscription.remove()
      hideSubscription.remove()
    }
  },[])

  const {user} = useContext(UserContext)
  
  const handleSend = () =>{
    comentariosService.insertarComentario(user.idUsuario,selectedRecipe.idReceta,nuevoComentario)
      .then(response=>{
        setSelectedRecipe({...selectedRecipe,comentarios:selectedRecipe.comentarios.concat(response)})
        setNuevoComentario("")
      })
  }

  return(
    <View style={styles.container}>
      {
        selectedRecipe.calificaciones.lenght ===0
          ? (
            <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Sé el primero en comentar</Text>
            </View>
          ) : (
            <>
              {/* Discussions */}
              <View style={{flex:1}}>
              <FlatList
                data={selectedRecipe?.calificaciones}
                keyExtractor={item=>item.id}
                contentContainerStyle={{
                  paddingHorizontal:SIZES.padding,
                  paddingBottom:70
                }}
                renderItem={({item,index})=>(
                  <CommentSection 
                    commentItem={item}
                    commentOption={
                      <View style={styles.commentOptionContainer}>
                        
                        {/* N° comments */}
                        <IconLabelButton
                          label={2}
                          icon={icons.comment}
                          iconStyle={{
                            tintColor:COLORS.black
                          }}
                          labelStyle={styles.likesCommentsLabelStyle}
                        />

                        {/* N° likes */}
                        <IconLabelButton
                          containerStyle={{
                            marginLeft:SIZES.radius
                          }}
                          label={20}
                          icon={icons.heart}          
                          labelStyle={styles.likesCommentsLabelStyle}
                        />

                      </View>
                    }  
                  />
                )}
              />
            </View>
          </>
        )
      }

      {/* Footer */}
      <View 
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: footerPosition,
          left: 0,
          right: 0,
          height: footerHeight,
          paddingVertical: SIZES.radius,
          paddingHorizontal:SIZES.padding,
          backgroundColor: COLORS.gray10,
        }}
      >
        <TextInput
          placeholder="¿Que opinas de la receta?"
          style={styles.footerInput}
          multiline
          value={nuevoComentario}
          onChange={(e)=>setNuevoComentario(e.target.value)}
          placeholderTextColor={COLORS.gray80}
          onContentSizeChange={(e)=>{
            const height = e.nativeEvent.contentSize.height
            if (height<=60){
              setFooterHeight(60)
            }else if(height>60 && height<=100){
              setFooterHeight(height)
            }else if(height>100){
              setFooterHeight(100)
            }
          }}
        />

        {/* Send Button */}
        <View style={styles.sendButtonContainer}>
          <IconButton 
            icon={icons.send}
            iconStyle={styles.sendButton}
            onPress={handleSend}
          />
        </View>
      </View>
    </View>
  )
}

export default RecipeDiscussions