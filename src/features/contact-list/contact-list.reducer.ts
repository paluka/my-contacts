import { INITIAL_PAGE_COUNT } from '../../constants';
import {
  CONTACT_LIST_REDUCER_STATE,
  CONTACT_LIST_ACTION_TYPES,
  CONTACT_LIST_LOAD_TYPES,
  CURRENT_CONTACT,
} from './contact-list.types';

export const INITIAL_CONTACT_LIST_REDUCER_STATE = {
  contacts: undefined,
  currentContact: undefined,
  page: INITIAL_PAGE_COUNT,
  loading: false,
  error: false,
  errorMsg: undefined,
};

export const contactListReducer = (
  state: CONTACT_LIST_REDUCER_STATE = INITIAL_CONTACT_LIST_REDUCER_STATE,
  action: CONTACT_LIST_ACTION_TYPES
): CONTACT_LIST_REDUCER_STATE => {
  switch (action.type) {
    case CURRENT_CONTACT.SUBMIT:
      return { ...state, currentContact: action.payload };
    case CONTACT_LIST_LOAD_TYPES.START:
      return { ...state, loading: true };
    case CONTACT_LIST_LOAD_TYPES.SUCCESS:
      if (state.contacts) {
        action.payload.results = state.contacts.concat(action.payload.results);
      }
      return {
        ...state,
        contacts: action.payload.results,
        loading: false,
        error: false,
        page: action.payload.page + 1,
      };
    case CONTACT_LIST_LOAD_TYPES.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload.message,
      };
    default:
      return state;
  }
};
