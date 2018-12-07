const initialState = {
  token: '',
  userId: '',
  email: '',
  password: ''
};

export default function userReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
  case 'POST_LOGIN_FULFILLED': {
    return {
      ...state,
      token: payload.id,
      userId: payload.userId,
      email: '',
      password: ''
    };
  }

  case 'POST_LOGIN_REJECTED': {
    return {
      ...state,
      error: payload
    };
  }
  
  case 'UPDATE_INPUT': {
    return {
      ...state,
      ...payload
    };
  }

  case 'DELETE_MEMBER_FULFILLED': {
    return {
      ...initialState
    };
  }

  default: {
    return state;
  }
  }
}
  