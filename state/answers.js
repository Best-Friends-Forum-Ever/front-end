const initialState = {
  list: [],
};

function answersReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ANSWER':
      return {
        list: [...state.list, action.payload],
      };
    case 'FETCH_ANSWERS':
      return {
        list: action.payload,
      }
    default: return state;
  }
}

export default answersReducer;
