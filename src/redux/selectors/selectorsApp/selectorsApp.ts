import { RequestStatusType } from 'redux/reducers';
import { AppStateType } from 'redux/store/reduxStore';

export const getStatusLoading = (state: AppStateType): RequestStatusType =>
  state.app.status;
export const getIsInitialized = (state: AppStateType): boolean => state.app.isInitialized;
