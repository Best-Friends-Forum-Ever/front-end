export const addAnswer = (questionId, answer, token) => async (dispatch) => {
  let response = await fetch(`https://bfff.onrender.com/forum/answer`, {
    method: 'POST',
    //need to somehow send in the profile token
    headers: { 'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, },
    body: JSON.stringify({ content: answer, questionId: questionId }),
  });

  // dispatch({
  //   type: 'ADD_ANSWER',
  //   payload: answer,
  // });
}