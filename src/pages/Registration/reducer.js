const initialState = {
  tags: [],
  member: {
    firstName: '',
    lastName: '',
    accountEmail: '',
    password: '',
    verifyPassword: '',
    headline: '',
    shortBio: '',
    avatar: '',
    publicEmail: '',
    website: '',
    linkedIn: '',
    facebook: '',
    twitter: '',
    tags: '',
    // links: {
    //   name: '',
    //   value: '',
    // },
    // tags: [{
    //   name: '',
    //   type: ''
    // }]

  }
};

export default function registrationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case 'GET_TAGS_FULFILLED': {
    return {
      ...state,
      tags: payload
    };
  }

  case 'ADD_INPUT' : {
    return {
      ...state,
      member: {...state.member, ...payload}
    };
  }

  case 'ADD_MEMBER_FULFILLED': {
    return {
      ...state,
      member: initialState.member,
      ...payload      
    };
  }

  case 'ADD_MEMBER': {
    return {
      ...state,
      ...payload
    };
  }

  default:
    return state;
  }
}
