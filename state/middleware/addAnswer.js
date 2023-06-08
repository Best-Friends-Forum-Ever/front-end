export const addAnswer = (questionId, answer) => async (dispatch) => {
  let response = await fetch(`https://bfff.onrender.com/forum/answer`, {
    method: 'POST',
    //need to somehow send in the profile token
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: answer, questionId: questionId }),
  });
  let data = await response.json();
  console.log(data);

  dispatch({
    type: 'ADD_ANSWER',
    payload: answer,
  });
}