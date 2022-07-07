import axios from 'axios';
import { FETCH_CHARACTERS, saveCharacters, FETCH_BOOKS, saveBooks } from '../actions';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CHARACTERS: {
      axios
        .get('http://hp.benjamingodey.fr/api/characters', {
        }).then((response) => {
          console.log(response.data);
          store.dispatch(saveCharacters(response));
        }).catch(() => {
          console.log('ko');
        });
      next(action);
      break;
    }
    case FETCH_BOOKS: {
      axios
      .get('http://hp.benjamingodey.fr/api/books', {
      }).then((response) => {
        console.log(response.data);
        store.dispatch(saveBooks(response));
      }).catch(() => {
        console.log('ko');
      });
    next(action);
    break;
    }
    default:
      next(action);
  }

};

export default apiMiddleWare;