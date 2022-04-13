import { Dispatch } from 'redux';

import { authAPI } from 'api/api';
import { ResultCodes } from 'enum/enum';
import { setAppStatusAC, setIsInitializedAC } from 'redux/reducers/appReducer/appAC';
import { setUserDataAC } from 'redux/reducers/authReducer/authAC';

export const getAuthUserData = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));

  const MeData = await authAPI.me();
  if (MeData.resultCode === ResultCodes.Success) {
    dispatch(setAppStatusAC('succeeded'));
    const { id, email, login } = MeData.data;
    dispatch(setUserDataAC(id, email, login, true));
    dispatch(setIsInitializedAC());
  }
};
export const logoutTC = () => async (dispatch: Dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === ResultCodes.Success) {
    dispatch(setUserDataAC(null, null, null, false));
  }
};

export const loginTC =
  (data: { email: string; password: string; rememberMe: boolean }) =>
  async (dispatch: any) => {
    const response = await authAPI.login(data);
    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(getAuthUserData());
    }
  };
