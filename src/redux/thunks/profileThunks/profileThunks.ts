import { profileAPI, usersAPI } from 'api/api';
import { ResultCodes } from 'enum/enum';
import { setAppErrorAC, setAppStatusAC } from 'redux/reducers';
import {
  changeStatusAC,
  savePhotoAC,
  setUserAC,
} from 'redux/reducers/profileReducer/profileAC';

export const getUserProfileTC = (userId: number) => async (dispatch: any) => {
  try {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserAC(response.data));
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
    dispatch(setAppStatusAC('failed'));
  }
};

export const getStatusTC = (userId: number) => async (dispatch: any) => {
  try {
    const response = await profileAPI.getStatus(userId);
    dispatch(changeStatusAC(response.data));
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
  }
};

export const updateStatusTC = (status: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(changeStatusAC(status));
    }
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
  }
};
export const savePhotoTC = (photo: any) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updatePhoto(photo);
    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(savePhotoAC(response.data.data.photos));
    }
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
  }
};
