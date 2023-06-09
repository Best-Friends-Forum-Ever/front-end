export const fetchAnswers = (question) => async (dispatch) => {
  let response = await fetch(`https://bfff.onrender.com/forum/${question._id}/answers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  let answers = await response.json();

  dispatch({
    type: 'FETCH_ANSWERS',
    payload: answers,
  });
}