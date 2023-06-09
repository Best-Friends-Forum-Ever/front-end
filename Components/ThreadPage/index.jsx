import * as React from 'react';
import { Avatar, Button, Card, Text, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import {View} from 'react-native';
import PostAnswerModal from './postAnswerModal';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function ThreadPage () {
  let selectedQuestion = useSelector(currentState => currentState.questions.selectedQuestion);
  let loggedIn = useSelector(currentState => currentState.profile.loggedIn);
  let answersData = useSelector(currentState => currentState.answers.list);
  let answersToScreen = [];

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  if(answersData){
    answersToScreen = answersData.map((answer,idx) => {
      return(
        <List.Item
          title={answer.content}
          key={idx}
          left={props => <List.Icon {...props} icon="star" />}
        />
      )
    })
  }

  return(
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Title title={JSON.stringify(selectedQuestion.content)} />
        <Card.Content>
          {answersToScreen}
        </Card.Content>
        {
        loggedIn &&
        (<Card.Actions>
          <PostAnswerModal
            visible={visible}
            hideModal={hideModal}
          />
          <Button style={{ marginTop: 30 }} onPress={showModal}>
            Post Answer
          </Button>
        </Card.Actions>)
      }
      </Card>
      
    </View>
  )
}

export default ThreadPage;