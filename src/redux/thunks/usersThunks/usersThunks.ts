import { Dispatch } from 'redux';

import { usersAPI } from 'api/api';
import { ResultCodes } from 'enum/enum';
import {
  followed,
  followProgress,
  setAppErrorAC,
  setAppStatusAC,
  setTotalUserCount,
  setUsers,
  toogleIsFetching,
  unfollowed,
} from 'redux/reducers';

export const getUsersThunkCreater =
  (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
      dispatch(toogleIsFetching(true));
      dispatch(setAppStatusAC('loading'));
      const response = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(setAppStatusAC('succeeded'));
      dispatch(toogleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUserCount(response.totalCount));
    } catch (err: any) {
      dispatch(setAppErrorAC(err.message));
      dispatch(setAppStatusAC('failed'));
    }
  };

export const followThunkCreater = (id: number) => async (dispatch: any) => {
  try {
    dispatch(followProgress(true, id));
    dispatch(setAppStatusAC('loading'));
    const response = await usersAPI.follow(id);
    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(setAppStatusAC('succeeded'));
      dispatch(followed(id));
    }
    dispatch(followProgress(false, id));
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
    dispatch(setAppStatusAC('failed'));
  }
};

export const unFollowThunkCreater = (id: number) => async (dispatch: any) => {
  try {
    dispatch(followProgress(true, id));
    dispatch(setAppStatusAC('loading'));
    const response = await usersAPI.unfollow(id);
    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(unfollowed(id));
      dispatch(setAppStatusAC('succeeded'));
    }
    dispatch(followProgress(false, id));
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
    dispatch(setAppStatusAC('failed'));
  }
};
