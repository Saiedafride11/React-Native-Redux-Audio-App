import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/home';
import Headphones from '../src/screens/headphones';
import Details from '../src/screens/product-details';
import Earphones from '../src/screens/earPhones';
import Speakers from '../src/screens/speakers';
import Cart from '../src/screens/cart';
import Checkout from '../src/screens/checkout';
import { colors } from '../src/theme';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';


const AppTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "red"
      }
}

const Tab = createBottomTabNavigator(); 

const HomeStack = createNativeStackNavigator();   
const HeadphoneStack = createNativeStackNavigator();   
const EarphonesStack = createNativeStackNavigator();   
const SpeakersStack = createNativeStackNavigator();    
const CartStack = createNativeStackNavigator();   

const HomeStackScreens = () => {
      return (
            <HomeStack.Navigator screenOptions={{headerShown: false}}>
                  <HomeStack.Screen name="Home" component={Home} />
            </HomeStack.Navigator>
      )
}

const HeadphoneStackScreens = () => {
      return (
            <HeadphoneStack.Navigator screenOptions={{headerShown: false}}>
                  <HeadphoneStack.Screen name="Headphones" component={Headphones} />
                  <HeadphoneStack.Screen name="Details" component={Details} />
            </HeadphoneStack.Navigator>
      )
}
const EarphonesStackScreens = () => {
      return (
            <EarphonesStack.Navigator screenOptions={{headerShown: false}}>
                  <EarphonesStack.Screen name="Earphones" component={Earphones} />
                  <EarphonesStack.Screen name="Details" component={Details} />
            </EarphonesStack.Navigator>
      )
}

const SpeakersStackScreens = () => {
      return (
            <SpeakersStack.Navigator screenOptions={{headerShown: false}}>
                  <SpeakersStack.Screen name="Speakers" component={Speakers} />
                  <SpeakersStack.Screen name="Details" component={Details} />
            </SpeakersStack.Navigator>
      )
}

const CartStackScreens = () => {
      return (
            <CartStack.Navigator screenOptions={{headerShown: false}}>
                  <CartStack.Screen name="Cart" component={Cart} />
                  <CartStack.Screen name="Checkout" component={Checkout} />
            </CartStack.Navigator>
      )
}

// icons
const TabBarIcon = ({fontFamily, name, color}) => {
      if(fontFamily === "MaterialCommunityIcons"){
            return <MaterialCommunityIcons name={name} size={24} color={color} />
      }
      else if(fontFamily === "Ionicons"){
            return <Ionicons name={name} size={24} color={color} />
      }
      else if(fontFamily === "SimpleLineIcons"){
            return <SimpleLineIcons name={name} size={24} color={color} />
      }
}

export default function Navigation() {
      return (
            <NavigationContainer theme={AppTheme}>
                  <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary}}>
                        <Tab.Screen options={{ title: "Home", tabBarIcon: ( {color} ) => (<TabBarIcon fontFamily={"MaterialCommunityIcons"} name="home" color={color}/>)}} name="HomeTab" component={HomeStackScreens} />
                        <Tab.Screen options={{ title: "Headphones", tabBarIcon: ( {color} ) => (<TabBarIcon fontFamily={"MaterialCommunityIcons"} name="headphones" color={color}/>)}} name="HeadphonesTab" component={HeadphoneStackScreens} />
                        <Tab.Screen options={{ title: "Earphones", tabBarIcon: ( {color} ) => (<TabBarIcon fontFamily={"SimpleLineIcons"} name="earphones-alt" color={color}/>)}} name="EarphonesTab" component={EarphonesStackScreens} />
                        <Tab.Screen options={{ title: "Speakers", tabBarIcon: ( {color} ) => (<TabBarIcon fontFamily={"MaterialCommunityIcons"} name="speaker" color={color}/>)}} name="SpeakersTab" component={SpeakersStackScreens} />
                        <Tab.Screen options={{ title: "Cart", tabBarIcon: ( {color} ) => (<TabBarIcon fontFamily={"Ionicons"} name="cart-outline" color={color}/>)}} name="CartTab" component={CartStackScreens} />
                  </Tab.Navigator>
            </NavigationContainer>
      );
}