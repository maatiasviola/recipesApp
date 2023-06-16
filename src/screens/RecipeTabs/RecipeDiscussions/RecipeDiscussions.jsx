// CSS & Constants
import styles from './styles'
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../../constants"

// Hooks 
import { useEffect, useState } from "react"

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
  
  const handleSend = () =>{
    // enviar nuevo comentario a la bdd
    console.log("Nuevo comentario:",nuevoComentario)

    {/* Si todo sale bien, la linea se va a parecer a la que esta abajo */}
    //setSelectedRecipe({...selectedRecipe,comentarios:selectedRecipe.comentarios.concat(returnedComment)})
    setNuevoComentario("")
  }

  return(
    <View style={styles.container}>
      
      {/* Discussions */}
      <View style={{flex:1}}>
        <FlatList
          data={dummyData?.recipe_details?.discussions} // reemplazar selectedRecipe
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
                    label={item?.no_of_comments}
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
                    label={item?.no_of_likes}
                    icon={icons.heart}          
                    labelStyle={styles.likesCommentsLabelStyle}
                  />

                  {/* Date posted */}
                  <Text style={styles.datePostedText}>
                    {item?.posted_on}
                  </Text>
                </View>
              }
              commentReplies={
                <FlatList
                  data={item?.replies}
                  scrollEnabled={false}
                  keyExtractor={item=>item.id}
                  renderItem={({item,index})=>(
                    <CommentSection 
                      commentItem={item}
                      commentOption={
                        <View style={styles.commentRepliesContainer}>
                          
                          {/* Reply */}
                          <IconLabelButton
                            icon={icons.reply}
                            label="Reply"
                            labelStyle={{
                              marginLeft:5,
                              color:COLORS.black,
                              ...FONTS.h4
                            }}
                          />

                          {/* Like */}
                          <IconLabelButton
                            icon={icons.heart_off}
                            label="Like"
                            containerStyle={{
                              marginLeft:SIZES.radius
                            }}
                            labelStyle={styles.likesCommentsLabelStyle}
                          />

                          {/* Date */}
                          <Text style={styles.datePostedText}>
                            {item?.posted_on}
                          </Text>
                        </View>
                      }  
                    />
                  )}
                />
              }  
            />
          )}
        />
      </View>

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
          placeholder="¿Que estás pensando?"
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