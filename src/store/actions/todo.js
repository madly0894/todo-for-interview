import * as types from "../actionTypes";

export const createAction = () => ({
  type: types.CREATE_TODO
});

export const updateAction = () => ({
  type: types.UPDATE_TODO
});

export const deleteAction = () => ({
  type: types.DELETE_TODO
});
