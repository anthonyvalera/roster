const initialState = {
  tags: [],
  members: [],
  selectedMember: null,
  isLoggingIn: false
};

export default function homeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case 'GET_TAGS_FULFILLED': {
    return {
      ...state,
      tags: payload
    };
  }
  case 'GET_MEMBERS_FULFILLED': {
    return {
      ...state,
      members: payload
    }; 
  }
  case 'GET_SELECTED_MEMBER_FULFILLED': {
    return {
      ...state,
      selectedMember: payload
    }; 
  }
  case 'CLOSE_PROFILE': {
    return {
      ...state,
      selectedMember: payload
    }; 
  }
  case 'LOGGING_IN': {
    return {
      ...state,
      isLoggingIn: payload
    }; 
  }
  default:
    return state;
  }
}