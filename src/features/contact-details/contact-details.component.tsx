import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { CONTACT_TYPE } from '../contact-list/contact-list.types';

interface ContactDetailsComponentProps {
  currentContact?: CONTACT_TYPE;
}

export const ContactDetailsComponent: React.FunctionComponent<ContactDetailsComponentProps> = ({
  currentContact,
}) => {
  const history = useHistory();

  if (!currentContact) {
    history.push('/');
  }

  return (
    <>
      {currentContact && (
        <div className="detailsContainer">
          <img
            className="detailsImg"
            src={currentContact.picture.large}
            alt="contact"
          />
          <div className="detailsItem">{`${currentContact.name.first} ${currentContact.name.last}`}</div>
          <div className="detailsItem">{currentContact.phone}</div>
          <div className="detailsItem">{currentContact.email}</div>
          <div className="detailsItem">
            {`${currentContact.location.street.number} ${currentContact.location.street.name}`}
          </div>
          <div className="detailsItem">
            {`${currentContact.location.city}, ${currentContact.location.state}`}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactDetailsComponent;
