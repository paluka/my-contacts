export const mockContactOne = {
  name: {
    first: 'myfirstname',
    last: 'mysecondname',
  },
  location: {
    street: {
      number: '123',
      name: 'streetname',
    },
    city: 'mycity',
    state: 'mystate',
  },
  email: 'email@gmail.com',
  phone: 'phone#',
  login: {
    uuid: 'uuid',
  },
  picture: {
    thumbnail: 'thumbnail',
    medium: 'medium',
    large: 'large',
  },
};
export const mockContactTwo = {
  name: {
    first: 'myfirstnameTwo',
    last: 'mysecondnameTwo',
  },
  location: {
    street: {
      number: '123Two',
      name: 'streetnameTwo',
    },
    city: 'mycityTwo',
    state: 'mystateTwo',
  },
  email: 'emailTwo@gmail.com',
  phone: 'phone#Two',
  login: {
    uuid: 'uuidTwo',
  },
  picture: {
    thumbnail: 'thumbnailTwo',
    medium: 'mediumTwo',
    large: 'largeTwo',
  },
};

export const mockContactThree = {
  name: {
    first: 'myfirstnameThree',
    last: 'mysecondnameThree',
  },
  location: {
    street: {
      number: '123Three',
      name: 'streetnameThree',
    },
    city: 'mycityThree',
    state: 'mystateThree',
  },
  email: 'emailThree@gmail.com',
  phone: 'phone#Three',
  login: {
    uuid: 'uuidThree',
  },
  picture: {
    thumbnail: 'thumbnailThree',
    medium: 'mediumThree',
    large: 'largeThree',
  },
};

export const mockStateWithContacts = {
  contactListReducer: {
    contacts: [mockContactOne, mockContactTwo],
    page: 2,
    loading: false,
    error: true,
  },
};

export const mockStateWithoutContacts = {
  contactListReducer: {
    page: 1,
    loading: true,
    error: false,
  },
};

export const mockAPIResults = {
  results: [mockContactOne, mockContactTwo],
  page: 3,
};
