import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import createStore from './state';
import AppNavigator from './main';

// import { useFonts, Marcellus } from '@expo-google-fonts/marcellus';

export default function App() {
  // // fonts
  // let [fontsLoaded] = useFonts({
  //   Marcellus,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Provider store={createStore()}>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <AppNavigator/>
        </PaperProvider>
      </SafeAreaView>
    </Provider>
  )
}
