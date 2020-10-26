export enum CONTACT_LIST_LOAD_TYPES {
  START = 'CONTACT_LIST_LOAD/START',
  SUCCESS = 'CONTACT_LIST_LOAD/SUCCESS',
  ERROR = 'CONTACT_LIST_LOAD/ERROR',
}

export enum CURRENT_CONTACT {
  SUBMIT = 'CURRENT_CONTACT/SUBMIT',
}

export type CONTACT_LIST_LOAD_START_ACTION = {
  type: typeof CONTACT_LIST_LOAD_TYPES.START;
};

export type CONTACT_LIST_LOAD_SUCCESS_ACTION = {
  type: typeof CONTACT_LIST_LOAD_TYPES.SUCCESS;
  payload: RANDOM_USER_API_RESULTS;
};

export type CONTACT_LIST_LOAD_ERROR_ACTION = {
  type: typeof CONTACT_LIST_LOAD_TYPES.ERROR;
  payload: ERROR_TYPE;
};

export type CURRENT_CONTACT_SUBMIT_ACTION = {
  type: typeof CURRENT_CONTACT.SUBMIT;
  payload: CONTACT_TYPE;
};

export type CONTACT_LIST_ACTION_TYPES =
  | CONTACT_LIST_LOAD_START_ACTION
  | CONTACT_LIST_LOAD_SUCCESS_ACTION
  | CONTACT_LIST_LOAD_ERROR_ACTION
  | CURRENT_CONTACT_SUBMIT_ACTION;

export type CONTACT_TYPE = {
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      number: string;
      name: string;
    };
    city: string;
    state: string;
  };
  email: string;
  phone: string;
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
    medium: string;
    large: string;
  };
};

export type RANDOM_USER_API_RESULTS = {
  results: CONTACT_TYPE[];
  page: number;
};

export type ERROR_TYPE = {
  message: string;
};

export type APP_STATE = {
  contactListReducer: CONTACT_LIST_REDUCER_STATE;
};

export type CONTACT_LIST_REDUCER_STATE = {
  contacts?: CONTACT_TYPE[];
  currentContact?: CONTACT_TYPE;
  page: number;
  loading: boolean;
  error: boolean;
  errorMsg?: string;
};
