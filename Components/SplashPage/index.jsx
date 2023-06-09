import * as React from 'react';
import { Button, IconButton, Card, Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

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

  // // working on switching button color after click
  // // pls do not delete

  // let isDarkMode = useSelector(currentState => currentState.settings.isDarkMode);

  // const [iconColor, setIconColor] = React.useState(isDarkMode ? '#4b0082' : '#9370db')

  const toggleDarkMode = () => {
    dispatch({
      type: "TOGGLE_DISPLAY"
    })

    // setIconColor(prevColor => (prevColor === '#4b0082' ? '#9370db' : '#4b0082'));
  };


  return (
    <Card mode="contained">
      <Card.Title
        // fontFamily="Marcellus"
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
        <IconButton
          icon="brightness-4"
          // color={iconColor}
          onPress={toggleDarkMode}
        />
      </Card.Actions>
    </Card>
  );
};

export default SplashPage;