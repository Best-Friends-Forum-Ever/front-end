import * as React from 'react';
import { Button, Card, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const SplashPage = () => {

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login'); // Navigate to login
  };

  const handleSignUpPress = () => {
    navigation.navigate('Signup'); // Navigate to login
  };

  const handleBypass = () => {
    navigation.navigate('HomePage'); // Navigate to home page
  }

  const toggleDarkMode = () => {
    dispatch({
      type: "TOGGLE_DISPLAY"
    })
  };

  return (
    <Card mode="contained">
      <Card.Title
        fontFamily="Marcellus"
        title="Welcome!"
        subtitle="Please make a selection to continue"
      />
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button
          mode="contained"
          // fontFamily="Marcellus"
          onPress={handleLoginPress}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          // fontFamily="Marcellus"
          onPress={handleSignUpPress}
        >
          Sign Up
        </Button>
        <Button
          mode="text"
          // fontFamily="Marcellus"
          onPress={handleBypass}
        >
          Continue as Guest
        </Button>
        <Button
          icon="brightness-4"
          onPress={toggleDarkMode}
        />
      </Card.Actions>
    </Card>
  );
};

export default SplashPage;