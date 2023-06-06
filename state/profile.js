const initialState = {
  name: '',
  email: '',
  token: '',
  loggedIn: false,
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOG_IN':
    return {
      name: action.payload.name,
      email: action.payload.email,
      token: action.payload.token,
      loggedIn: true,
    };
    case 'LOG_OUT':
      return {
        state: initialState,
      }
  default: return state;
  }
}

export default profileReducer;