import { useState } from 'react';
import * as React from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const register = async function () {

    let response = await fetch("https://bfff.onrender.com/auth/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email: username,
        password
      }),
    })
      .then((response) => {
        Alert.alert(
          "Success!",
          `User ${username} was successfully created!`,
          [{
            text: "OK",
            onPress: () => navigation.navigate('SplashPage')
          }]
        );
        return true;
      })
      .catch((error) => {
        Alert.alert("Error!", error.message);
        return false;
      });
  };

  return (
    <Card>
      <TextInput
        mode="outlined"
        label="First Name"
        value={firstName}
        placelabholder={"First Name"}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        mode="outlined"
        label="Last Name"
        value={lastName}
        placeholder={"Last Name"}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        mode="outlined"
        label="Email"
        value={username}
        placeholder={"Email"}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        placeholder={"Password"}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="elevated" onPress={() => register()}>Sign up!</Button>
    </Card>
  );
};

export default Signup;