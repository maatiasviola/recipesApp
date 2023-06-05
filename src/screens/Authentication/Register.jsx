import { useState } from "react"
import { Image,View } from "react-native"
import CountryModal from "../../components/Authentication/CountryModal"
import SignUp from "../../components/Authentication/SignUp"
import { COLORS, images, SIZES } from "../../constants"

const Register = ()=>{
  

  //Country
  const [countries,setCountries] = useState([])
  const [showCountryModal,setShowCountryModal]=useState(false)

  //Form
  const [email,setEmail] = useState("")
  const [alias,setAlias] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [selectedCountry,setSelectedCountry]=useState(null)
  
  return(
    <View
      style={{
        flex:1,
        backgroundColor:COLORS.lightGray,
        paddingHorizontal:SIZES.padding
      }}
    >
      <CountryModal 
        countries={countries}
        showCountryModal={showCountryModal} 
        setShowCountryModal={setShowCountryModal} 
        setSelectedCountry={setSelectedCountry}
      />
      {/* Logo */}
      <Image
        source={images.logo}
        resizeMode='contain'
        style={{
          alignSelf:'center',
          marginTop: SIZES.padding * 2,
          width:50,
          height:50
        }}
      />

        <SignUp
          alias={alias} setAlias={setAlias}  
          email={email} setEmail={setEmail}
          phone={phone} setPhone={setPhone}
          password={password} setPassword={setPassword}
          countries={countries} setCountries={setCountries}
          showCountryModal={showCountryModal} setShowCountryModal={setShowCountryModal}
          selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}
          setMode={setMode}
        />
      
    </View>
  )
}

export default Register