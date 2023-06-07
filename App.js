import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SplashPage from './Components/SplashPage';
import HomePage from './Components/HomePage';
import ThreadPage from './Components/ThreadPage';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ThreadPage" component={ThreadPage} />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
