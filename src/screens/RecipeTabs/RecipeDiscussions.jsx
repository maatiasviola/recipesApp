import { useEffect, useState } from "react"
import { FlatList, Text, View,Image,TextInput, Keyboard } from "react-native"
import CommentSection from "../../components/CommentSection"
import IconButton from "../../components/IconButton"
import IconLabelButton from "../../components/IconLabelButton"
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants"

const RecipeDiscussions= ()=>{
  const [footerPosition,setFooterPosition] = useState(0)
  const [footerHeight,setFooterHeight]=useState(60)
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
  return(
    <View
      style={{
        flex:1,
        backgroundColor:COLORS.white
      }}
    >
      {/* Discussions */}
      <View
        style={{
          flex:1
        }}
      >
        <FlatList
          data={dummyData?.recipe_details?.discussions}
          keyExtractor={item=>item.id}
          contentContainerStyle={{
            paddingHorizontal:SIZES.padding,
            paddingBottom:70
          }}
          renderItem={({item,index})=>(
            <CommentSection 
              commentItem={item}
              commentOption={
                <View
                  style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius,
                    paddingVertical:SIZES.base,
                    borderTopWidth:1,
                    borderBottomWidth:1,
                    borderColor:COLORS.gray20
                  }}
                >
                  {/* N° comments */}
                  <IconLabelButton
                    label={item?.no_of_comments}
                    icon={icons.comment}
                    iconStyle={{
                      tintColor:COLORS.black
                    }}
                    labelStyle={{
                      marginLeft:3,
                      color:COLORS.black,
                      ...FONTS.h4
                    }}
                  />

                  {/* N° likes */}
                  <IconLabelButton
                    containerStyle={{
                      marginLeft:SIZES.radius
                    }}
                    label={item?.no_of_likes}
                    icon={icons.heart}          
                    labelStyle={{
                      marginLeft:3,
                      color:COLORS.black,
                      ...FONTS.h4
                    }}
                  />

                  {/* Date posted */}
                  <Text
                    style={{
                      flex:1,
                      textAlign:'right',
                      ...FONTS.h4
                    }}
                  >
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
                        <View
                          style={{
                            flexDirection:'row',
                            marginTop:SIZES.radius,
                            paddingVertical:SIZES.base,
                            borderTopWidth:1,
                            borderBottomWidth:1,
                            borderColor:COLORS.gray20
                          }}
                        >
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
                            labelStyle={{
                              marginLeft:3,
                              color:COLORS.black,
                              ...FONTS.h4
                            }}
                          />

                          {/* Date */}
                          <Text style={{flex:1,textAlign:'right',...FONTS.h4}}>
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
          flexDirection:'row',
          position:'absolute',
          bottom:footerPosition,
          left:0,
          right:0,
          height:footerHeight,
          paddingHorizontal:SIZES.padding,
          paddingVertical:SIZES.radius,
          backgroundColor:COLORS.gray10
        }}
      >
        <TextInput
          placeholder="¿Que estás pensando?"
          style={{
            flex:1,
            marginRight:SIZES.base,
            ...FONTS.body3
          }}
          multiline
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
        
        <View
          style={{
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <IconButton 
            icon={icons.send}
            iconStyle={{
              width:25,
              height:25,
              tintColor:COLORS.primary
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default RecipeDiscussions