const initialState = {
  tags: []
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
  default:
    return state;
  }
}