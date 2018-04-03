import { FETCH_GIST_SUCCESS } from './../actions';

const initialState = {
  cards: [],
};

const CardReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case FETCH_GIST_SUCCESS:
      return {
        ...state,
        cards: actions.payload,
      };
    default:
      return state;
  }
}

export default CardReducer;