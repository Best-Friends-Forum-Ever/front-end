const initialState = {
  list: [],
  selectedQuestion: {},
};

function questionsReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_QUESTION':
    return {
      ...state,
      list: [...state.list, action.payload],
    };
    case 'FETCH_QUESTIONS':
      return {
        ...state,
        list: action.payload,
      }
    case 'SELECT_QUESTION':
      return {
        ...state,
        selectedQuestion: action.payload,
      }
  default: return state;
  }
}

export default questionsReducer;