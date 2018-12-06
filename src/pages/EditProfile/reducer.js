const initialState = {
  member: {
    firstName: '',
    lastName: '',
    email: '',
    headline: '',
    bio: '',
    avatar: '',
    publicEmail: '',
    website: '',
    linkedIn: '',
    facebook: '',
    twitter: '',
    tagIds: []
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

  case 'EDIT_TAG' : {
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

  case 'EDIT_MEMBER_FULFILLED': {
    return {
      ...state,
      member: initialState.member,
      statusText: payload.statusText,
      status: payload.status
    };
  }

  case 'SHOWHIDE_MEMBER_FULFILLED': {
    return {
      ...state,
      member: {
        ...state.member,
        isHidden: payload
      }
    };
  }

  case 'DELETE_MEMBER_FULFILLED': {
    return {
      ...state,
      member: initialState.member,
      statusText: payload.statusText,
      status: payload.status      
    };
  }

  default:
    return state;
  }
}
