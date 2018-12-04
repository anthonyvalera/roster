const initialState = {
  tags: [],
  members: []
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
  default:
    return state;
  }
}