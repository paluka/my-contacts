import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  fetchContactList,
  createSetCurrentContactAction,
} from './contact-list.actions';
import { contactListConnector } from './contact-list.selectors';
import ContactListComponent from './contact-list.component';
import { CONTACT_TYPE } from './contact-list.types';

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadContactList: (page: number) => {
    return dispatch(fetchContactList(page));
  },
  setCurrentContact: (contact: CONTACT_TYPE) => {
    return dispatch(createSetCurrentContactAction(contact));
  },
});

export default connect(
  contactListConnector,
  mapDispatchToProps
)(ContactListComponent);
