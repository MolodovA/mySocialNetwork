import { ProfileInfoType } from './types';

export const addPostAC = (message: string) =>
  ({
    type: 'PROFILE/ADD_POST',
    payload: {
      message,
    },
  } as const);

export const changeNewTextAC = (newText: string) =>
  ({
    type: 'PROFILE/CHANGE_NEW_TEXT',
    payload: {
      newText,
    },
  } as const);

export const changeStatusAC = (status: string) =>
  ({
    type: 'PROFILE/CHANGE-STATUS',
    payload: {
      status,
    },
  } as const);

export const setUserAC = (profile: ProfileInfoType) =>
  ({
    type: 'PROFILE/SET-USER',
    profile,
  } as const);
export const savePhotoAC = (photo: any) =>
  ({
    type: 'PROFILE/SET-PHOTO',
    photo,
  } as const);

type addPostACType = ReturnType<typeof addPostAC>;
type changeNewTextACType = ReturnType<typeof changeNewTextAC>;
type changeStatusACType = ReturnType<typeof changeStatusAC>;
type setUserACType = ReturnType<typeof setUserAC>;
type SavePhotoACType = ReturnType<typeof savePhotoAC>;

export type ProfileActionsType =
  | addPostACType
  | changeNewTextACType
  | setUserACType
  | changeStatusACType
  | SavePhotoACType;
