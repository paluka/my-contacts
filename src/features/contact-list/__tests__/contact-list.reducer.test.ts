import {
  mockContactOne,
  mockContactThree,
  mockContactTwo,
  mockStateWithContacts,
  mockStateWithoutContacts,
} from '../../../__mocks__/mock-state';
import { contactListReducer } from '../contact-list.reducer';
import {
  CONTACT_LIST_ACTION_TYPES,
  CONTACT_LIST_LOAD_TYPES,
  CURRENT_CONTACT,
} from '../contact-list.types';

describe('contact-list.reducer', () => {
  it('CURRENT_CONTACT.SUBMIT', () => {
    const mockState = {
      page: 5,
      loading: false,
      error: true,
    };
    const mockAction = {
      type: CURRENT_CONTACT.SUBMIT,
      payload: mockContactOne,
    };
    const expected = {
      currentContact: {
        email: 'email@gmail.com',
        location: {
          city: 'mycity',
          state: 'mystate',
          street: { name: 'streetname', number: '123' },
        },
        login: { uuid: 'uuid' },
        name: { first: 'myfirstname', last: 'mysecondname' },
        phone: 'phone#',
        picture: { large: 'large', medium: 'medium', thumbnail: 'thumbnail' },
      },
      error: true,
      loading: false,
      page: 5,
    };
    expect(contactListReducer(mockState, mockAction)).toEqual(expected);
  });
  it('CONTACT_LIST_LOAD_TYPES.START', () => {
    const mockState = {
      page: 6,
      loading: false,
      error: false,
    };
    const mockAction = {
      type: CONTACT_LIST_LOAD_TYPES.START,
    } as CONTACT_LIST_ACTION_TYPES;
    const expected = {
      error: false,
      loading: true,
      page: 6,
    };
    expect(contactListReducer(mockState, mockAction)).toEqual(expected);
  });
  it('CONTACT_LIST_LOAD_TYPES.ERROR', () => {
    const mockState = {
      page: 2,
      loading: false,
      error: false,
    };
    const mockAction = {
      type: CONTACT_LIST_LOAD_TYPES.ERROR,
      payload: { message: 'errorStr' },
    } as CONTACT_LIST_ACTION_TYPES;
    const expected = {
      error: true,
      errorMsg: 'errorStr',
      loading: false,
      page: 2,
    };
    expect(contactListReducer(mockState, mockAction)).toEqual(expected);
  });
  describe('CONTACT_LIST_LOAD_TYPES.SUCCESS', () => {
    it('loads initial contacts', () => {
      const mockState = {
        page: 6,
        loading: false,
        error: false,
      };
      const mockAction = {
        type: CONTACT_LIST_LOAD_TYPES.SUCCESS,
        payload: {
          results: [mockContactTwo, mockContactThree],
          page: 1,
        },
      } as CONTACT_LIST_ACTION_TYPES;
      const expected = {
        error: false,
        loading: false,
        page: 2,
        contacts: [mockContactTwo, mockContactThree],
      };
      expect(
        contactListReducer(
          mockStateWithoutContacts.contactListReducer,
          mockAction
        )
      ).toEqual(expected);
    });
    it('loads additional contacts', () => {
      const mockState = {
        page: 6,
        loading: false,
        error: false,
      };
      const mockAction = {
        type: CONTACT_LIST_LOAD_TYPES.SUCCESS,
        payload: {
          results: [mockContactThree],
          page: 11,
        },
      } as CONTACT_LIST_ACTION_TYPES;
      const expected = {
        error: false,
        loading: false,
        page: 12,
        contacts: [mockContactOne, mockContactTwo, mockContactThree],
      };
      expect(
        contactListReducer(mockStateWithContacts.contactListReducer, mockAction)
      ).toEqual(expected);
    });
  });
});
