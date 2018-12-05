export default function userReducer(state = {}, action) {
  const { payload, type } = action;
  
  switch (type) {
  case 'POST_LOGIN_FULFILLED': {
    return {
      ...state,
      token: payload.id,
      userId: payload.userId
    };
  }

  case 'CHECK_IF_ADMIN_FULFILLED': {
    return {
      ...state,
      admin: payload
    };
  }

  default: {
    return state;
  }
  }
}
  