import * as React from 'react';
import { Avatar, Button, Card, Text, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnswers } from '../../state/middleware/fetchAnswers';
import { Link } from '@react-navigation/native';

function HomePage () {
  let questions = useSelector(currentState => currentState.questions.list);
  let loggedIn = useSelector(currentState => currentState.profile.loggedIn);
  const dispatch = useDispatch();

  let questionsToScreen = questions.map(question => {
    return(
      <List.Item
        title={question.content}
        left={props => <List.Icon {...props}/>}
      >
        <Link onPress={() => handleOpenQuesiton(question)} to={{ screen: 'ThreadPage'}}>Open</Link>
      </List.Item>
    )
  });

  function handleOpenQuesiton (question) {
    dispatch(fetchAnswers(question));
  }

  return (
    <Card>
      <Card.Title title="Forum" subtitle="Questions/Answers"/>
      <Card.Content>
        {questionsToScreen}
      </Card.Content>
      {loggedIn &&
        (<Card.Actions>
          <Button>Post Question</Button>
        </Card.Actions>)
      }
    </Card>
  )
}

export default HomePage;