export const fetchQuestions = () => async (dispatch) => {
  let response = await fetch('https://bfff.onrender.com/forum/questions');
  let data = await response.json();

  dispatch({
    type: 'FETCH_QUESTIONS',
    payload: data,
  });
}