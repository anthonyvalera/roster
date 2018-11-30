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
    tagIds: []
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
  case 'ADD_TAG' : {

    //make a copy of all tagIds
    let tagIds = [...state.member.tagIds];

    //if the tag they chose is unchecked
    if (payload.value === false) {
      //make sure we filter that tag out of tagIds
      tagIds = tagIds.filter(tag => tag !== payload.name);
    } else {
      //tag is checked, push tagId inside array
      tagIds.push(payload.name);
    }


    return {
      ...state,
      member: {...state.member, tagIds}
    };
  }
  //the tagIds is not unsetting the checkboxes.
  case 'ADD_MEMBER_FULFILLED': {
    return {
      ...state,
      member: initialState.member,
      tagIds: initialState.tagIds,
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
