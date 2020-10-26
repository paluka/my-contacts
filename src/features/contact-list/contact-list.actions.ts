import { Dispatch } from 'redux';

import { RANDOM_USER_API_URL } from '../../constants';
import {
  CONTACT_LIST_LOAD_ERROR_ACTION,
  CONTACT_LIST_LOAD_START_ACTION,
  CONTACT_LIST_LOAD_SUCCESS_ACTION,
  CONTACT_LIST_LOAD_TYPES,
  CONTACT_TYPE,
  CURRENT_CONTACT,
  CURRENT_CONTACT_SUBMIT_ACTION,
  ERROR_TYPE,
  RANDOM_USER_API_RESULTS,
} from './contact-list.types';

export const createFetchContactListStartAction = (): CONTACT_LIST_LOAD_START_ACTION => ({
  type: CONTACT_LIST_LOAD_TYPES.START,
});

export const createFetchContactListSuccessAction = (
  data: RANDOM_USER_API_RESULTS
): CONTACT_LIST_LOAD_SUCCESS_ACTION => ({
  type: CONTACT_LIST_LOAD_TYPES.SUCCESS,
  payload: data,
});

export const createFetchContactListErrorAction = (
  error: ERROR_TYPE
): CONTACT_LIST_LOAD_ERROR_ACTION => ({
  type: CONTACT_LIST_LOAD_TYPES.ERROR,
  payload: error,
});

//  Ignoring as-any tslint rule due to complexity of redux thunk type
// tslint:disable-next-line
export const fetchContactList = (page: number): any => {
  return async (dispatch: Dispatch) => {
    dispatch(createFetchContactListStartAction());
    const response = await fetch(`${RANDOM_USER_API_URL}${page}`);
    try {
      const json = await response.json();
      const data = Object.assign(json, { page });
      return dispatch(createFetchContactListSuccessAction(data));
    } catch (error) {
      return dispatch(createFetchContactListErrorAction(error));
    }
  };
};

export const createSetCurrentContactAction = (
  contact: CONTACT_TYPE
): CURRENT_CONTACT_SUBMIT_ACTION => ({
  type: CURRENT_CONTACT.SUBMIT,
  payload: contact,
});
