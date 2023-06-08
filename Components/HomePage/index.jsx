import * as React from 'react';
import { Avatar, Button, Card, Text, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { TouchableRipple } from 'react-native-paper';
import { fetchAnswers } from '../../state/middleware/fetchAnswers';
import { fetchQuestions } from '../../state/middleware/fetchQuestions';
import { Link } from '@react-navigation/native';
import PostQuestionModal from './postQuestionModal';
import { useNavigation } from '@react-navigation/native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function HomePage() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let questions = useSelector(currentState => currentState.questions.list);
  let loggedIn = useSelector(currentState => currentState.profile.loggedIn);

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  let questionsToScreen = [];

  if (questions) {
    questionsToScreen = questions.map((question, idx) => {
      return (
        <TouchableRipple
          onPress={() => handleSelectedQuestion(question)}
          key={idx}
        >
          <List.Item
            title={question.content}
            left={props => <List.Icon {...props} icon="folder" />}
          />
        </TouchableRipple>
      )
    });
  }

  const handleSelectedQuestion = (question) => {
    dispatch( {
      type: 'SELECT_QUESTION',
      payload: question
    });
    navigation.navigate('ThreadPage'); // Navigate to login
  };

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
      {
        loggedIn &&
        (<Card.Actions>
          <PostQuestionModal
            visible={visible}
            hideModal={hideModal}
          />
          <Button style={{ marginTop: 30 }} onPress={showModal}>
            Post Question
          </Button>
        </Card.Actions>)
      }
      {/* <Card.Actions>
          <PostQuestionModal
            visible={visible}
            hideModal={hideModal}
            />
          <Button style={{marginTop: 30}} onPress={showModal}>
            Post Question
          </Button>
        </Card.Actions> */}
    </Card >
  )
}

export default HomePage;