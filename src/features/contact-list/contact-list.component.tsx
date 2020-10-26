import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { INITIAL_PAGE_COUNT } from '../../constants';
import { CONTACT_TYPE } from './contact-list.types';

interface ContactListComponentProps {
  loadContactList: (page: number) => void;
  setCurrentContact: (contact: CONTACT_TYPE) => void;
  contactList: CONTACT_TYPE[];
  isLoading: boolean;
  page: number;
}

export const ContactListComponent: React.FunctionComponent<ContactListComponentProps> = ({
  loadContactList,
  setCurrentContact,
  contactList,
  isLoading,
  page = INITIAL_PAGE_COUNT,
}) => {
  const history = useHistory();

  useEffect(() => {
    function infiniteScroll() {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        loadContactList(page);
      }
    }

    if (page === INITIAL_PAGE_COUNT && contactList.length === 0) {
      loadContactList(INITIAL_PAGE_COUNT);
    }
    window.addEventListener('scroll', infiniteScroll, { passive: true });

    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [contactList.length, loadContactList, page]);

  const results = contactList.map((contact: CONTACT_TYPE, index: number) => {
    return (
      <div
        key={index}
        className="contactListItem"
        onClick={() => {
          setCurrentContact(contact);
          history.push(`/user/${contact.login.uuid}`);
        }}
      >
        <img
          className="contactListImg"
          src={contact.picture.thumbnail}
          alt="contact"
        />
        <div className="contactListName">{`${contact.name.first} ${contact.name.last}`}</div>
      </div>
    );
  });

  const loading = isLoading ? (
    <img
      className="loading"
      src={require('../../assets/loading.gif')}
      alt="Loading animation"
    />
  ) : (
    ''
  );

  return (
    <div className="contactListContainer">
      {loading}
      <div className="contactList">{results}</div>
    </div>
  );
};

export default ContactListComponent;
