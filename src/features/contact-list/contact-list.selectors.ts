import { createStructuredSelector, ParametricSelector } from 'reselect';
import { APP_STATE, CONTACT_TYPE } from './contact-list.types';

export const selectContactList = (state: APP_STATE): CONTACT_TYPE[] => {
  return state.contactListReducer.contacts
    ? state.contactListReducer.contacts
    : [];
};

export const selectLoadingFlag = (state: APP_STATE): boolean => {
  return state.contactListReducer.loading;
};

export const selectDataPage = (state: APP_STATE): number => {
  return state.contactListReducer.page;
};

export const contactListConnector = createStructuredSelector({
  contactList: selectContactList as ParametricSelector<
    unknown,
    unknown,
    CONTACT_TYPE[]
  >,
  isLoading: selectLoadingFlag as ParametricSelector<unknown, unknown, boolean>,
  page: selectDataPage as ParametricSelector<unknown, unknown, number>,
});
