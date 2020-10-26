import {
  mockContactTwo,
  mockStateWithContacts,
  mockStateWithoutContacts,
} from '../../../__mocks__/mock-state';
import { selectCurrentContact } from '../contact-details.selectors';

describe('contact-details.selectors', () => {
  describe('selectCurrentContact', () => {
    it('returns current contact when available', () => {
      const mockStateWithCurrContact = Object.assign(
        {},
        mockStateWithoutContacts,
        {
          contactListReducer: {
            currentContact: mockContactTwo,
          },
        }
      );
      expect(selectCurrentContact(mockStateWithCurrContact)).toEqual(
        mockContactTwo
      );
    });
    it('returns undefined when current contact is NOT available', () => {
      expect(selectCurrentContact(mockStateWithContacts)).toEqual(undefined);
    });
  });
});
