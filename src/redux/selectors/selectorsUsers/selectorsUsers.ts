import { initialStateType } from 'redux/reducers';
import { AppStateType } from 'redux/store/reduxStore';

export const getFollowingIsProgress = (state: AppStateType): string[] =>
  state.findUsersReducer.followingIsProgress;
export const getData = (state: AppStateType): initialStateType => state.findUsersReducer;

export const getTotalUsersCount = (state: AppStateType): number =>
  state.findUsersReducer.totalUsersCount;

export const getPageSize = (state: AppStateType): number =>
  state.findUsersReducer.pageSize;
