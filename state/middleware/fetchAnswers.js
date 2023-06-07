export const fetchAnswers = (question) => async (dispatch) => {
  let response = await fetch(`https://ourRenderSite.com/QUESTIONS/${question._id}`);
  let data = await response.json();
  let answers = data.results;

  dispatch({
    type: 'SELECT_QUESTION',
    payload: question,
  })

  dispatch({
    type: 'FETCH_ANSWERS',
    payload: answers,
  });
}