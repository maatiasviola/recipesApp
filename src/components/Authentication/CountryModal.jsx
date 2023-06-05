import { View,TouchableOpacity,Text,Image,FlatList } from "react-native"
import { TouchableWithoutFeedback } from "react-native"
import { Modal } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

const CountryModal = ({countries,showCountryModal,setShowCountryModal,setSelectedCountry})=>{
  console.log(countries)
  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={showCountryModal}
    >
      <TouchableWithoutFeedback
        onPress={() => setShowCountryModal(false)}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.dark80
          }}
        >
          <View
            style={{
              height: 400,
              width: SIZES.width * 0.8,
              backgroundColor: COLORS.light,
              borderRadius: SIZES.radius
                }}
          >
            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              contentContainerStyle={{
                  paddingHorizontal: SIZES.padding,
                  paddingBottom: SIZES.padding,
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: SIZES.radius
                      }}
                      onPress={() => {
                        console.log(item)
                        setSelectedCountry(item)
                        setShowCountryModal(false)
                      }}
                    >
                    <Image
                      source={{ uri: item.flag }}
                      resizeMode="contain"
                      style={{
                          width: 40,
                          height: 30
                      }}
                    />
                    <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>{item.name}</Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default CountryModal