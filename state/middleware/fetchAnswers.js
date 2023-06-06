export const fetchAnswers = (questionID) => async (dispatch) => {
  let response = await fetch(`https://ourRenderSite.com/QUESTIONS/${questionID}`);
  let data = await response.json();
  let answers = data.results;

  dispatch({
    type: 'FETCH_ANSWERS',
    payload: answers,
  });
}