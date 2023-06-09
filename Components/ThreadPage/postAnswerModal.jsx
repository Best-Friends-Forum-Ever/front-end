import * as React from 'react';
import { Modal, Portal, Button, TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from '../../state/middleware/addAnswer';
import { fetchAnswers } from '../../state/middleware/fetchAnswers';

function PostAnswerModal ({visible, hideModal}){
	let token = useSelector(currentState => currentState.profile.token);
	let selectedQuestion = useSelector(currentState => currentState.questions.selectedQuestion);
	const [answer, setAnswer] = React.useState("");
	const dispatch = useDispatch();
	const containerStyle = {backgroundColor: 'white', padding: 20};

	function handleSubmit () {
		dispatch(addAnswer(selectedQuestion, answer, token));
		dispatch(fetchAnswers(selectedQuestion));
		setAnswer('');
		hideModal();
	}

	return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
				<TextInput
      		label="Add Answer Here"
      		value={answer}
      		onChangeText={text => setAnswer(text)}
    		/>
				<Button mode="contained" onPress={() => handleSubmit()}>
    			Submit
  			</Button>
      </Modal>
    </Portal>
	)	
}

export default PostAnswerModal;