export const fetchQuestions = () => async (dispatch) => {
  let response = await fetch('https://ourRenderSite.com/QUESTIONS');
  let data = await response.json();
  let questions = data.results;

  dispatch({
    type: 'FETCH_QUESTIONS',
    payload: questions,
  });
}