import axios from 'axios';

// Actions
export function getTags() {
  return {
    type: 'GET_TAGS',
    payload: axios.get('/api/tags')
      .then(response => {
        return response.data;
      })
  };    
}

 