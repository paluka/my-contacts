import { createStructuredSelector, ParametricSelector } from 'reselect';
import { APP_STATE, CONTACT_TYPE } from '../contact-list/contact-list.types';

export const selectCurrentContact = (
  state: APP_STATE
): CONTACT_TYPE | undefined => {
  return state.contactListReducer
    ? state.contactListReducer.currentContact
    : undefined;
};

export const contactDetailsConnector = createStructuredSelector({
  currentContact: selectCurrentContact as ParametricSelector<
    unknown,
    unknown,
    CONTACT_TYPE
  >,
});
