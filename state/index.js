import answersReducer from './answers';
import profileReducer from './profile';
import questionsReducer from './questions';
import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware } from 'redux';

let reducers = combineReducers({
  answers: answersReducer,
  questions: questionsReducer,
  profile: profileReducer,
});

function store() {
  return createStore(reducers, applyMiddleware(thunk));
}

export default store;