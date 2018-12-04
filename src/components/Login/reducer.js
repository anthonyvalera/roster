const initialState = {
    email: '',
    password: ''
  }
  
  export default function loginReducer(state = initialState, action) {
    const { payload, type } = action;
  
    switch (type) {
      case 'POST_LOGIN_REJECTED': {
        return {
          ...state,
          error: payload
        }
      }
  
      case 'UPDATE_EMAIL': {
        return {
          ...state,
          email: payload
        }
      }
  
      case 'UPDATE_PASSWORD': {
        return {
          ...state,
          password: payload
        }
      }
      
      default: {
        return state;
      }
    }
  }
  