import { v1 } from 'uuid';

// @ts-ignore
import user from '../../../assets/images/user.svg';

import { PostType, ProfileInitialStateType } from './types';

import { ProfileActionsType } from 'redux/reducers/profileReducer/profileAC';

const profileInitialState = {
  profileInfo: {
    fullName: 'Vasya ',
    lookingForAJob: true,
    lookingForAJobDescription: '',
    userId: 2,
    aboutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: '',
    },
    photos: {
      large: '',
      small: '',
    },
  },
  postsData: [
    {
      id: v1(),
      message: 'i am learning react',
      avatar: user,
      like: 9,
    },
    {
      id: v1(),
      message: 'i am learning js',
      avatar: user,
      like: 7,
    },
    {
      id: v1(),
      message: 'i am learning css',
      avatar: user,
      like: 4,
    },
    {
      id: v1(),
      message: 'i am learning html',
      avatar: user,
      like: 2,
    },
  ],
  newPostText: '',
  status: 'i am dream live in USA',
};

export const profileReducer = (
  state: ProfileInitialStateType = profileInitialState,
  action: ProfileActionsType,
): ProfileInitialStateType => {
  const newPost: PostType = {
    id: v1(),
    message: '',
    like: 0,
    avatar: profileInitialState.profileInfo.photos.large
      ? profileInitialState.profileInfo.photos.large
      : user,
  };
  switch (action.type) {
    case 'PROFILE/ADD_POST':
      newPost.message = action.payload.message;
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        newPostText: '',
      };
    case 'PROFILE/CHANGE_NEW_TEXT':
      return { ...state, newPostText: action.payload.newText };
    case 'PROFILE/CHANGE-STATUS':
      return { ...state, status: action.payload.status };
    case 'PROFILE/SET-USER':
      return { ...state, profileInfo: action.profile };
    case 'PROFILE/SET-PHOTO':
      return {
        ...state,
        profileInfo: { ...state.profileInfo, photos: action.photo },
      };
    default:
      return state;
  }
};
