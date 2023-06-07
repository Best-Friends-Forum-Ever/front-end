import * as React from 'react';
import { Modal, Portal, Button, TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion } from '../../state/middleware/addQuestion';

function PostQuestionModal ({visible, hideModal}){
	let profile = useSelector(currentState => currentState.profile.list);
	const [question, setQuestion] = React.useState("");
	const dispatch = useDispatch();
	const containerStyle = {backgroundColor: 'white', padding: 20};

	function handleSubmit () {
		dispatch(addQuestion(question));
	}

	return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
				<TextInput
      		label="Add Question Here"
      		value={question}
      		onChangeText={text => setQuestion(text)}
    		/>
				<Button mode="contained" onPress={handleSubmit()}>
    			Submit
  			</Button>
      </Modal>
    </Portal>
	)	
}

export default PostQuestionModal;