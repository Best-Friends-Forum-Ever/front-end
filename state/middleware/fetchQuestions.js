export const fetchQuestions = () => async (dispatch) => {
  let response = await fetch('https://bfff.onrender.com/forum/questions');
  let data = await response.json();
  let questions = data.results;
  console.log(data);

  dispatch({
    type: 'FETCH_QUESTIONS',
    payload: data,
  });
}