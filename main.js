import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import SplashPage from './Components/SplashPage';
import HomePage from './Components/HomePage';
import ThreadPage from './Components/ThreadPage';
import Signup from './Components/AuthPage/registerForm';
import Login from './Components/AuthPage/loginForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AppNavigator() {
  let isDarkMode = useSelector(currentState => currentState.settings.isDarkMode);

  // navigation
  const Stack = createNativeStackNavigator();
  return (
    < NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme} >
      <Stack.Navigator initialRouteName='SplashPage'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ThreadPage" component={ThreadPage} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

const DarkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(91, 48, 166)',
    background: 'rgb(36, 4, 89)',
    card: 'rgb(36, 4, 89)',
    text: 'rgb(137, 98, 204)',
    border: 'rgb(60, 27, 117)',
    notification: 'rgb(80, 42, 145)',
  },
};

const LightTheme = {
  dark: false,
  colors: {
    // back button text
    primary: 'rgb(118, 58, 222)',
    // background
    background: 'rgb(139, 89, 227)',
    // header area
    card: 'rgb(169, 125, 245)',
    // text
    text: 'rgb(49, 6, 110)',

    // unused -- do not delete or comment out
    border: 'rgb(155, 98, 252)',
    notification: 'rgb(163, 122, 235)',
  },
};
