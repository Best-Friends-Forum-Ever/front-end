const initialState = {
  isDarkMode: true
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
  case 'TOGGLE_DISPLAY':
    return {
      isDarkMode: !state.isDarkMode
    };
  
  default: return state;
  }
}

export default settingsReducer;