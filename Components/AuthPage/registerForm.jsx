import { useState } from 'react';
import * as React from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { Alert } from 'react-native';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

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
        // Parse.User.signUp returns the already created ParseUser object if successful
        Alert.alert(
          "Success!",
          `User ${username} was successfully created!`
        );
        return true;
      })
      .catch((error) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert("Error!", error.message);
        return false;
      });
  };

  return (
    <Card>
      <TextInput
        mode="outlined"
        label="firstName"
        value={username}
        placelabholder={"First Name"}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        mode="outlined"
        label="lastName"
        value={password}
        placeholder={"Last Name"}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        mode="outlined"
        label="email"
        value={username}
        placeholder={"Email"}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        mode="outlined"
        label="password"
        value={password}
        placeholder={"Password"}
        onChangeText={(text) => setPassword(text)}
      />
      <Button placeholder={"Sign Up"} onPress={() => register()} />
    </Card>
  );
};

export default Signup;