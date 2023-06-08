export const addQuestion = (question, token) => async (dispatch) => {
  let response = await fetch(`https://ourRenderSite.com/QUESTIONS/`,{
    method: 'POST',
    //need to somehow send in the profile token
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(question),
  });
  let data = await response.json();
  console.log(data);

  dispatch({
    type: 'ADD_QUESTION',
    payload: question,
  });
}