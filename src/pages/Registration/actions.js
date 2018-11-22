import axios from 'axios';

// Actions
export function getTags() {
  return {
    type: 'GET_CARDS_FOR_GAME',
    payload: axios.get('/api/tags')
      .then(({ data }) => data)
      .catch(err => console.log(err))
  }
}

// payload: axios.get(`http://localhost:3000/api/tags?access_token=efq9KRUJHmDpqA4gcA7ejrpE8hx0nKvRoPAzLpL8JskIeZuc5vy2zmjv4ksdx9KN`)
