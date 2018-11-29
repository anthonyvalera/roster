
const initialState = {
  member: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verifyPassword: '',
    headline: '',
    bio: '',
    avatar: '',
    publicEmail: '',
    website: '',
    linkedIn: '',
    facebook: '',
    twitter: ''
   
  }
};

export default function editMemberReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

  case 'GET_MEMBER': {
    return {
      ...state,
      ...payload
    };
  }

  case 'GET_MEMBER_FULFILLED': {
    return {
      ...state,
      member: payload
    };
  }

  case 'EDIT_INPUT' : {
    return {
      ...state,
      member: {...state.member, ...payload}
    };
  }

  case 'EDIT_MEMBER_FULFILLED': {
    return {
      ...state,
      member: initialState.member,
      ...payload      
    };
  }

  case 'EDIT_MEMBER': {
    return {
      ...state,
      ...payload
    };
  }
//not sure if this works
  case 'DELETE_MEMBER' : {
    return {
      ...state,
      ...payload
    }
  }

  default:
    return state;
  }
}
