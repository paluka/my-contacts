import { shallow } from 'enzyme';
import React from 'react';
import {
  mockContactTwo,
  mockContactThree,
} from '../../../__mocks__/mock-state';
import { ContactListComponent } from '../contact-list.component';

describe('contact-list.component', () => {
  it('does not render contacts when there are none', () => {
    const contactListComp = shallow(
      <ContactListComponent
        loadContactList={() => {}}
        setCurrentContact={() => {}}
        contactList={[]}
        isLoading={false}
        page={1}
      />
    );
    expect(contactListComp.find('.contactListItem').length).toEqual(0);
    expect(contactListComp.find('.loading').length).toEqual(0);
  });
  it('renders contacts when there are some', () => {
    const contactListComp = shallow(
      <ContactListComponent
        loadContactList={() => {}}
        setCurrentContact={() => {}}
        contactList={[mockContactTwo, mockContactThree]}
        isLoading={false}
        page={1}
      />
    );
    expect(contactListComp.find('.contactListItem').length).toEqual(2);
  });
  it('does renders loading gif', () => {
    const contactListComp = shallow(
      <ContactListComponent
        loadContactList={() => {}}
        setCurrentContact={() => {}}
        contactList={[]}
        isLoading={true}
        page={1}
      />
    );
    expect(contactListComp.find('.loading').length).toEqual(1);
  });
});
