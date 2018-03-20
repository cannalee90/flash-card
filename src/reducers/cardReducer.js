const initialState = {
  cards: [],
};

const CardReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case 'FETCH_CARDS':
      return {
        cards: actions.data.cards,
      };
    default:
      return state;
  }
}

export default CardReducer;