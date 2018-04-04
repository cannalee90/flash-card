import { 
  FETCH_GIST_ALL,
  FETCH_GIST_SUCCESS,
  FETCH_GIST_ERROR,
  POST_NEW_GIST,
  POST_NEW_GIST_ERROR,
  POST_NEW_GIST_SUCCESS,
} from './../actions';

const initialState = {
  cards: [],
  error: {},
  isLoading: false,
};

const CardReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case FETCH_GIST_ALL:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_GIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cards: actions.payload,
      };
    case POST_NEW_GIST:
      return {
        ...state,
        isLoading: true,
      }
    case POST_NEW_GIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case FETCH_GIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: actions.payload,
      }
    case POST_NEW_GIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: actions.paylaod,
      };
    default:
      return state;
  }
}

export default CardReducer;