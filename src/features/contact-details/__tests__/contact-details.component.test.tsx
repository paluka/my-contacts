const mockHistoryArray: string[] = [];

jest.mock('react-router-dom', () => ({
  useHistory: () => mockHistoryArray,
}));

import { shallow } from 'enzyme';
import React from 'react';
import { mockContactThree } from '../../../__mocks__/mock-state';
import { ContactDetailsComponent } from '../contact-details.component';

describe('contact-list.component', () => {
  it('does not render details container when no contact available', () => {
    const contactListComp = shallow(
      <ContactDetailsComponent currentContact={undefined} />
    );
    expect(contactListComp.find('.detailsContainer').length).toEqual(0);
    expect(mockHistoryArray.length).toEqual(1);
    expect(mockHistoryArray[0]).toEqual('/');
  });

  it('renders details container when contact available', () => {
    const contactListComp = shallow(
      <ContactDetailsComponent currentContact={mockContactThree} />
    );
    expect(contactListComp.find('.detailsContainer').length).toEqual(1);
    expect(contactListComp.find('.detailsItem').length).toEqual(5);
  });
});
