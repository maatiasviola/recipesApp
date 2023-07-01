import { useCallback, useEffect,React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Text } from 'react-native';
import { Easing } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipesListing from './src/screens/RecipesListing/RecipesListing';
import Login from './src/screens/Login/Login';
import RecipeDetails from './src/screens/RecipeDetails/RecipeDetails';
import SignUp from './src/components/Authentication/SignUp';
import SignIn from './src/components/Authentication/SignIn/SignIn';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import CodeVerification from './src/screens/SignUpCodeVerification/SignUpCodeVerification';
import { UserContextProvider } from './src/Context/UserContext';
import RecetasAIntentar from './src/screens/RecetasAIntentar/RecetasAIntentar';

const Stack=createStackNavigator()
const options={
  gestureEnabled:false,
  transitionSpec:{
    open:{
      animation:'timing',
      config:{duration:400,easing:Easing.inOut(Easing.ease)}
    },
    close:{
      animation:'timing',
      config:{duration:400,easing:Easing.inOut(Easing.ease)}
    }
  },
  cardStyleInterpolator:({current:{progress}})=>{
    return{
      cardStyle:{
        opacity:progress
      }
    }
  }
}

export default function App() {
  //devuelve todas las fuentes que va a cargar
  //use fonts recibe un objeto con las fuentes que vamos a cargar
  const [fontsLoaded] = useFonts({
    RobotoBlack: require('./src/assets/fonts/Roboto-Black.ttf'),
    RobotoBold: require('./src/assets/fonts/Roboto-Bold.ttf'),
    RobotoRegular: require('./src/assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
  SplashScreen.preventAutoHideAsync();
}, []);

  const onLayout = useCallback(async ()=>{
    if (fontsLoaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded])

  if (!fontsLoaded) return <Text>Cargando...</Text>;
  
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Stack.Navigator
          screenOptions={{
              headerShown: false
          }}
          initialRouteName={'Login'}
        >
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />
          
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            name="CodeVerification"
            component={CodeVerification}
          />
          <Stack.Screen
              name="Home"
              component={Tabs}
          />
          <Stack.Screen 
            name="RecipeListing"
            component={RecipesListing}
            options={()=>options}
          />
          <Stack.Screen 
            name="RecipeDetails"
            component={RecipeDetails}  
          />

          <Stack.Screen 
            name="RecetasIntentar"
            component={RecetasAIntentar}  
          />
        </Stack.Navigator>
      </UserContextProvider>
    </NavigationContainer>
  );
}

