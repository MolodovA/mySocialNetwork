import { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { authAPI } from 'api/api';
import { ResultCodes } from 'enum/enum';
import {
  setAppErrorAC,
  setAppStatusAC,
  setIsInitializedAC,
} from 'redux/reducers/appReducer/appAC';
import { setUserDataAC } from 'redux/reducers/authReducer/authAC';

export const getAuthUserData = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  try {
    const data = await authAPI.me();
    if (data.resultCode === ResultCodes.Success) {
      dispatch(setAppStatusAC('succeeded'));
      const { id, email, login } = data.data;
      dispatch(setUserDataAC(id, email, login, true));
    }
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
  } finally {
    dispatch(setIsInitializedAC());
  }
};

export const logoutTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  try {
    const response = await authAPI.logout();
    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(setAppStatusAC('succeeded'));
      dispatch(setUserDataAC('', '', '', false));
    }
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
  }
};

export const loginTC =
  (data: { email: string; password: string; rememberMe: boolean }) =>
  async (dispatch: any) => {
    dispatch(setAppStatusAC('loading'));
    try {
      const response = await authAPI.login(data);
      if (response.data.resultCode === ResultCodes.Success) {
        dispatch(setAppStatusAC('succeeded'));
        dispatch(getAuthUserData());
      }
    } catch (err: any) {
      dispatch(setAppErrorAC(err.message));
    }
  };
