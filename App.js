import { useCallback, useEffect,React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Text } from 'react-native';
import { Easing } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import RecipesListing from './src/screens/RecipesListing';
import Login from './src/screens/Login';
import RecipeDetails from './src/screens/RecipeDetails';
import AuthMain from './src/screens/Authentication/AuthMain';

const Stack=createSharedElementStackNavigator()
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
    RobotoBlack:require('./src/assets/fonts/Roboto-Black.ttf'),
    RobotoBold:require('./src/assets/fonts/Roboto-Bold.ttf'),
    RobotoRegular:require('./src/assets/fonts/Roboto-Regular.ttf')
  })

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  },[])

  const onLayout = useCallback(async ()=>{
    if (fontsLoaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded])

  if (!fontsLoaded) return <Text>Boludo</Text>;
  
  return (
    <NavigationContainer>
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
          name="Authorization"
          component={AuthMain}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

