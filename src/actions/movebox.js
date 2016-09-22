import * as types from '../constants/actiontype';

export const movebox = (moveX, moveY) => ({
  type: types.MOVEBOX,
  moveX,
  moveY
});
