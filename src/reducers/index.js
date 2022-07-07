import {
  SAVE_CHARACTERS,
  SAVE_BOOKS,
  TOGGLE_CHARACTERS_LOADING,
  TOGGLE_SPINNER_LOADING,
  TOGGLE_QUIZZ_NAV,
  TOGGLE_IS_LOADED,
} from "../actions";

const initialState = {
  characters: [],
  charactersSettings: {
    loading: true,
  },
  books: [],
  spinnerLoading: false,
  quizz: true,
  isLoaded: false,
};

function reducer(state = initialState, action = {}) {
  console.log("reducer");
  switch (action.type) {
    case SAVE_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case SAVE_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case TOGGLE_IS_LOADED:
      return {
        ...state,
        isLoaded: !state.isLoaded,
      };
    case TOGGLE_CHARACTERS_LOADING:
      return {
        ...state,
        charactersSettings: {
          ...state.charactersSettings,
          loading: !state.charactersSettings.loading,
        },
      };
    case TOGGLE_SPINNER_LOADING:
      return {
        ...state,
        spinnerLoading: !state.spinnerLoading,
      };
    case TOGGLE_QUIZZ_NAV:
      return {
        ...state,
        quizz: !state.quizz,
      };
    default:
      return state;
  }
}

export default reducer;
