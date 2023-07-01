import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../screens/Home/Home';
import {COLORS,icons} from '../constants'
import TabIcon from '../components/TabIcon';
import Settings from "../screens/Settings/Settings";
import Search from "../screens/Search/Search";
import RecipesListing from "../screens/RecipesListing/RecipesListing";
import CreateRecipe from "../screens/CreateRecipe/CreateRecipe";
import RecetasAIntentar from "../screens/RecetasAIntentar/RecetasAIntentar";

const {Screen,Navigator} = createBottomTabNavigator()

const Tabs = ()=>{
  return(
    <Navigator
    initialRouteName='/Home'
    screenOptions={{
      "tabBarShowLabel": false,
      "tabBarStyle": [
        {
          position:'absolute',
          bottom:0,
          left:0,
          right:0,
          elevation:0,
          backgroundColor: COLORS.white,
          borderTopColor:'transparent',
          height:100
        },
        null
      ]
    }}
    >

      <Screen 
        name='/Home' 
        component={Home} 
        options={{
          tabBarIcon:({focused})=><TabIcon focused={focused}
          icon={icons.home}/>}}
      />
      <Screen 
        name='/Search' 
        component={Search}
        options={{
          tabBarIcon:({focused})=><TabIcon focused={focused}
          icon={icons.search}/>}}
      />
      <Screen 
        name='/Create' 
        component={CreateRecipe}
        options={{
          tabBarIcon:({focused})=><TabIcon focused={focused}
          icon={icons.plus}/>}}
      />
      <Screen 
        name='/Bookmark' 
        component={RecetasAIntentar}
        options={{
          tabBarIcon:({focused})=><TabIcon focused={focused}
          icon={icons.bookmark}/>}}
      />
      <Screen 
        name='/Editadas' 
        component={CreateRecipe}
        options={{
          tabBarIcon:({focused})=><TabIcon focused={focused}
          icon={icons.editar}/>}}
      />
      <Screen 
        name='/Settings' 
        component={Settings}
        options={{
          tabBarIcon:({focused})=><TabIcon focused={focused}
          icon={icons.settings}/>}}
      />
    </Navigator>
  )
}

export default Tabs