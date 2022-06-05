import { AppStateType } from 'redux/store/reduxStore';

export const selectIsAuth = (state: AppStateType): boolean => state.auth.isAuth;
