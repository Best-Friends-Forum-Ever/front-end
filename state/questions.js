const initialState = {
  list: [],
};

function questionsReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_QUESTION':
    return {
      list: [...state.list, action.payload],
    };
    case 'FETCH_QUESTIONS':
      return {
        list: action.payload,
      }
  default: return state;
  }
}

export default questionsReducer;