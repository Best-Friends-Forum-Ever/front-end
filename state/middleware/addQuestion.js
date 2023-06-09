export const addQuestion = (question, token) => async (dispatch) => {
  console.log("THIS IS GETTING DISPATCHED");
  let response = await fetch(`https://bfff.onrender.com/forum/question`,{
    method: 'POST',
    //need to somehow send in the profile token
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    },
    body: JSON.stringify({ content: question }),
  });
  let data = await response.json();
  console.log(data);

  // dispatch({
  //   type: 'ADD_QUESTION',
  //   payload: question,
  // });
}