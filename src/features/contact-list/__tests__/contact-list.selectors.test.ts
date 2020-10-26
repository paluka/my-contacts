import {
  mockContactOne,
  mockContactTwo,
  mockStateWithContacts,
  mockStateWithoutContacts,
} from '../../../__mocks__/mock-state';
import {
  selectContactList,
  selectDataPage,
  selectLoadingFlag,
} from '../contact-list.selectors';

describe('contact-list.selectors', () => {
  describe('selectContactList', () => {
    it('returns contact list when available', () => {
      expect(selectContactList(mockStateWithContacts)).toEqual([
        mockContactOne,
        mockContactTwo,
      ]);
    });
    it('returns empty array when contact list is NOT available', () => {
      expect(selectContactList(mockStateWithoutContacts)).toEqual([]);
    });
  });
  describe('selectLoadingFlag', () => {
    it('returns contact list is loading flag', () => {
      expect(selectLoadingFlag(mockStateWithoutContacts)).toEqual(true);
    });
    it('returns contact list is loading flag', () => {
      expect(selectLoadingFlag(mockStateWithContacts)).toEqual(false);
    });
  });
  describe('selectDataPage', () => {
    it('eturns page of RANDOM USER API', () => {
      expect(selectDataPage(mockStateWithContacts)).toEqual(2);
    });
  });
});
