import { AppStateType } from 'redux/store/reduxStore';

export const getISAuth = (state: AppStateType): boolean => state.auth.isAuth;
