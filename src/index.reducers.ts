import { combineReducers } from 'redux';
import { contactListReducer } from './features/contact-list/contact-list.reducer';

export default function createReducer(extraReducerObjects?: {}) {
  return combineReducers({
    contactListReducer,
    ...extraReducerObjects,
  });
}
