export const addAnswer = (questionID, answer) => async (dispatch) => {
  let response = await fetch(`https://ourRenderSite.com/QUESTIONS/${questionID}`,{
    method: 'POST',
    //need to somehow send in the profile token
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(answer),
  });
  let data = await response.json();
  console.log(data);

  dispatch({
    type: 'ADD_ANSWER',
    payload: answer,
  });
}