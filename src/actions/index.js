// ACTION TYPE FETCH_CHARACTERS
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';

// ACTION CREATOR fetchCharacters
export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
});

// ACTION TYPE TOGGLE_IS_LOADED
export const TOGGLE_IS_LOADED = 'TOGGLE_IS_LOADED';

// ACTION CREATOR fetchCharacters
export const setIsLoaded = () => ({
  type: TOGGLE_IS_LOADED,
});

// ACTION TYPE SAVE_CHARACTERS
export const SAVE_CHARACTERS = 'SAVE_CHARACTERS';

// ACTION CREATOR saveCharacters
export const saveCharacters = (characters) => ({
  type: SAVE_CHARACTERS,
  payload: characters,
});

// ACTION TYPE FETCH_BOOKS
export const FETCH_BOOKS = 'FETCH_BOOKS';

// ACTION CREATOR fetchBooks
export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});

// ACTION TYPE SAVE_BOOKS
export const SAVE_BOOKS = 'SAVE_BOOKS';

// ACTION CREATOR saveBooks
export const saveBooks = (books) => ({
  type: SAVE_BOOKS,
  payload: books,
});

// ACTION TYPE TOOGLE_CHARACTERS_LOADING
export const TOGGLE_CHARACTERS_LOADING = 'TOGGLE_CHARACTERS_LOADING';

// ACTION CREATOR setToggleCharactersLoading
// Use in Loading to have a Timeout for showing characters
export const setToggleCharactersLoading = () => ({
  type: TOGGLE_CHARACTERS_LOADING,
});

// ACTION TYPE TOGGLE_SPINNER_LOADING
export const TOGGLE_SPINNER_LOADING = 'TOGGLE_SPINNER_LOADING';

// ACTION CREATOR setSpinnerLoading
// Use to make the animation on the loading
export const setSpinnerLoading = () => ({
  type: TOGGLE_SPINNER_LOADING,
});


export const TOGGLE_ROTATE_IMAGE = 'TOGGLE_ROTATE_IMAGE';

export const setToggleRotateImage = () => ({
  type: TOGGLE_ROTATE_IMAGE,
});

export const TOGGLE_QUIZZ_NAV ='TOGGLE_QUIZZ_NAV';

// Use to remove 'quizz' in nav and add'coming'
export const setToggleQuizzNav = () => ({
  type: TOGGLE_QUIZZ_NAV,
});


