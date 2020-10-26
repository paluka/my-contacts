import { mockAPIResults, mockContactOne } from '../../../__mocks__/mock-state';
import {
  createFetchContactListErrorAction,
  createFetchContactListStartAction,
  createFetchContactListSuccessAction,
  createSetCurrentContactAction,
} from '../contact-list.actions';

describe('contact-list-actions', () => {
  it('createFetchContactListStartAction', () => {
    expect(createFetchContactListStartAction()).toEqual({
      type: 'CONTACT_LIST_LOAD/START',
    });
  });
  it('createFetchContactListSuccessAction', () => {
    expect(createFetchContactListSuccessAction(mockAPIResults)).toEqual({
      type: 'CONTACT_LIST_LOAD/SUCCESS',
      payload: mockAPIResults,
    });
  });
  it('createFetchContactListErrorAction', () => {
    expect(createFetchContactListErrorAction({ message: 'errorStr' })).toEqual({
      type: 'CONTACT_LIST_LOAD/ERROR',
      payload: { message: 'errorStr' },
    });
  });
  it('createSetCurrentContactAction', () => {
    expect(createSetCurrentContactAction(mockContactOne)).toEqual({
      type: 'CURRENT_CONTACT/SUBMIT',
      payload: mockContactOne,
    });
  });
});
