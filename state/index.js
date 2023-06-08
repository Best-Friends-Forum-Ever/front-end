import answersReducer from './answers';
import profileReducer from './profile';
import questionsReducer from './questions';
import settingsReducer from './settings';
import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware } from 'redux';

let reducers = combineReducers({
  answers: answersReducer,
  questions: questionsReducer,
  profile: profileReducer,
  settings: settingsReducer,
});

function store() {
  return createStore(reducers, applyMiddleware(thunk));
}

export default store;