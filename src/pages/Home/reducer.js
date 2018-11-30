const initialState = {
  tags: [],
  members: []
};

export default function homeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Landing component get necessary data and built before member remote method for additional security
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
<<<<<<< HEAD
=======
    case 'GET_TAGS_FULFILLED': {
      return {
        ...state,
        tags: payload
      }
    }
    case 'GET_MEMBERS_FULFILLED': {
      return {
        ...state,
        members: payload
      } 
    }
    default:
      return state;
>>>>>>> Bare bones landing page functionalit #4
=======
>>>>>>> Landing component get necessary data and built before member remote method for additional security
  }
}