import { PostType } from 'redux/reducers/profileReducer/types';
import { AppStateType } from 'redux/store/reduxStore';

export const getStatus = (state: AppStateType): string => state.profileReducer.status;
export const getPostsData = (state: AppStateType): PostType[] =>
  state.profileReducer.postsData;
export const getNewPostText = (state: AppStateType): string =>
  state.profileReducer.newPostText;
