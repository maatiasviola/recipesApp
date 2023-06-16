import { useEffect, useRef, useState } from "react";
import { View,Modal,StyleSheet,Animated,TouchableOpacity,Image,Text } from "react-native";
import { COLORS, FONTS, images } from "../constants";

const ModalPopUp = ({visible,children,setVisible,texto,imagen,titulo,onPress}) => {
    const [showModal, setShowModal] = useState(visible)
    
    const scaleValue = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
      toggleModal();
    }, [visible]);


    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }

    return (
      <Modal 
        transparent visible={showModal} 
        style={{zIndex:1000}}
        onRequestClose={() => setVisible(!visible)}
      >
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.header}>
                {titulo && (
                  <>
                  {/* Title */}
                  <Text
                      style={{
                        lineHeight:36,
                        color:COLORS.black,
                        flex:1,
                        ...FONTS.h3
                      }}
                    >
                      {titulo}
                    </Text>
                  </>
                )}
                <TouchableOpacity onPress={onPress ? onPress : ()=>setVisible(false)}>
                  <Image
                    source={images.x}
                    style={{height: 30, width: 30}}
                  />
                </TouchableOpacity>
              </View>
            </View>
        
            {imagen && (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={imagen}
                  style={{height: 150, width: 150, marginVertical: 10}}
                />
              </View>
            )}

            {texto && (
              <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
                {texto}
              </Text>
            )}

            {children}
        
          </Animated.View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    alignItems:'center',
    display:'flex',
    flexDirection:'row', 
    justifyContent:'space-between',
    textAlign:'center'
  },
});


export default ModalPopUp