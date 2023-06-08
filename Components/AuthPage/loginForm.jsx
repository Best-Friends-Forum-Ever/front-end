import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, IconButton, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async () => {
    try {
      // Perform login logic here using username and password
      // Example: Make a fetch call to your backend API
      const response = await fetch('https://bfff.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": username,
          "password": password
        }),
      });

      // Handle the response from the backend
      if (response.ok) {
        const data = await response.json();
        const newtoken = data.token;
        const user = data.user;
        let userName = user.firstName + ' '+ user.lastName;
        let profile = {
          name: userName,
          email: user.email,
          token: newtoken,
        }

        // Reset username and password fields
        setUsername('');
        setPassword('');

        // Save the token to local storage or secure storage
        //localStorage.setItem('token', newtoken);

        // Save profile to state
        dispatch({
          type: 'LOG_IN',
          payload: profile,
        });
        
        // Navigate to 'Home' screen after successful login
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomePage' }],
        });
      } else {
        // Handle login error, display appropriate message to the user
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Content>
          <TextInput
            label="Username"
            mode="outlined"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            right={
              <TextInput.Icon
                name={showPassword ? 'eye-off' : 'eye'}
                onPress={handleClickShowPassword}
              />
            }
          />
          <Button mode="contained" onPress={handleLogin}>
            Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
