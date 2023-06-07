import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import SplashPage from './Components/SplashPage';
import HomePage from './Components/HomePage';
import ThreadPage from './Components/ThreadPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Components/AuthPage/registerForm';
import { Provider } from 'react-redux';
import createStore from './state'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={createStore()}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <PaperProvider>
            <Stack.Navigator
              initialRouteName='SplashPage'>
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="SplashPage" component={SplashPage} />
              <Stack.Screen name="HomePage" component={HomePage} />
              <Stack.Screen name="ThreadPage" component={ThreadPage} />
            </Stack.Navigator>
          </PaperProvider>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#290d01',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
