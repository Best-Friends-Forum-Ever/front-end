import * as React from 'react';
import { Avatar, Button, Card, Text, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function ThreadPage () {
  let selectedQuestion = useSelector(currentState => currentState.questions.selectedQuestion);

  return(
    <View>ThreadPage</View>
  )
}

export default ThreadPage;