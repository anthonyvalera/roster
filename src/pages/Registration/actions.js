import axios from 'axios';

// Actions
export function getTags() {
  return {
    type: 'GET_CARDS_FOR_GAME',
    payload: axios.get('/api/tags')
      .then(({ data }) => data)
      .catch(err => {throw err}
      )
}

 