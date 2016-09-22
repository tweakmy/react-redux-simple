import * as types from '../constants/actiontype';

const box = (state = {}
, action) => {
  switch (action.type) {
    case types.MOVEBOX:

      const newx = state.x + action.moveX;
      const newy = state.y + action.moveY;

      return Object.assign({}, state, {
          x: newx,
          y: newy
        }
      );
    default:
      return state;
  }
};

export default box;
