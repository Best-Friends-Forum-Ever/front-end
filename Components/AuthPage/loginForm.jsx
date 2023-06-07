import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, IconButton, Card } from 'react-native-paper';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Content>
          <TextInput label="Username" mode="outlined" />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                name={showPassword ? 'eye-off' : 'eye'}
                onPress={handleClickShowPassword}
              />
            }
          />
          <Button mode="contained">Login</Button>
        </Card.Content>
      </Card>
    </View>
  );
}
