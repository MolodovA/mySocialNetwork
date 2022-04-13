import { profileAPI, usersAPI } from 'api/api';
import { ResultCodes } from 'enum/enum';
import {
  changeStatusAC,
  savePhotoAC,
  setUserAC,
} from 'redux/reducers/profileReducer/profileAC';

export const getUserProfileTC = (userId: number) => async (dispatch: any) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserAC(response.data));
};

export const getStatusTC = (userId: string) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(changeStatusAC(response.data));
};

export const updateStatusTC = (status: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(changeStatusAC(status));
    }
  } catch (error) {
    console.error(error);
  }
};
export const savePhotoTC = (photo: any) => async (dispatch: any) => {
  const response = await profileAPI.updatePhoto(photo);
  if (response.data.resultCode === ResultCodes.Success) {
    dispatch(savePhotoAC(response.data.data.photos));
  }
};
