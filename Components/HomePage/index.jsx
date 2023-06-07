import * as React from 'react';
import { Avatar, Button, Card, Text, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAnswers } from '../../state/middleware/fetchAnswers';
import { fetchQuestions } from '../../state/middleware/fetchQuestions';
import { Link } from '@react-navigation/native';
import PostQuestionModal from './postQuestionModal';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function HomePage () {
  let questions = useSelector(currentState => currentState.questions.list);
  let loggedIn = useSelector(currentState => currentState.profile.loggedIn);
  const dispatch = useDispatch();

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  let questionsToScreen = [];
  if(questions){
    questionsToScreen = questions.map(question => {
      return(
        <List.Item
          title={question.content}
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <Link onPress={() => handleOpenQuesiton(question)} to={{ screen: 'ThreadPage'}}>Open</Link>
        </List.Item>
      )
    });
  }

  function handleOpenQuesiton (question) {
    dispatch(fetchAnswers(question));
  }

  useEffect(() => {
    dispatch(fetchQuestions());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <Card.Title title="Forum" subtitle="Questions/Answers" left={LeftContent} />
      <Card.Content>
        {questionsToScreen}
      </Card.Content>
      {/* {loggedIn &&
        (<Card.Actions>
          <PostQuestionModal
            visible={visible}
            hideModal={hideModal}
            />
          <Button style={{marginTop: 30}} onPress={showModal}>
            Post Question
          </Button>
        </Card.Actions>)
      } */}
      <Card.Actions>
          <PostQuestionModal
            visible={visible}
            hideModal={hideModal}
            />
          <Button style={{marginTop: 30}} onPress={showModal}>
            Post Question
          </Button>
        </Card.Actions>
    </Card>
  )
}

export default HomePage;