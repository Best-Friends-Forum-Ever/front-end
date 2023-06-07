import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, IconButton, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async () => {
    try {
      // Perform login logic here using username and password
      // Example: Make a fetch call to your backend API
      const response = await fetch('your-backend-login-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // Handle the response from the backend
      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Reset username and password fields
        setUsername('');
        setPassword('');

        // Save the token to local storage or secure storage
        // Example: AsyncStorage.setItem('token', token);

        // Navigate to 'Home' screen after successful login
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
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
