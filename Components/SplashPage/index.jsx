import * as React from 'react';
import { Avatar, Button, Card, View } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SplashPage = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('../AuthPage/loginForm.jsx'); // Navigate to login
  };

  const handleSignUpPress = () => {
    navigation.navigate('../AuthPage/loginForm.jsx'); // Navigate to login
  };

  const handleBypass = () => {
    navigation.navigate('../HomePage/index.jsx'); // Navigate to home page
  }

  return (
    <Card mode="contained" theme={{ colors: { primary: '#d6845e' } }}>
      <Card.Title
        title="Welcome"
        subtitle="Please make a selection to continue"
      />
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button
          mode="contained"
          buttonColor="#290d01"
          textColor="#d6845e"
          onPress={handleLoginPress}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          buttonColor="#290d01"
          textColor="#d6845e"
          onPress={handleSignUpPress}
        >
          Sign Up
        </Button>
        <Button
          mode="text"
          textColor="#290d01"
          onPress={handleBypass}
        >
          Continue as Guest
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default SplashPage;