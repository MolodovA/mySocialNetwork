import { RequestStatusType } from 'redux/reducers/appReducer/appReducer';

export const setAppStatusAC = (status: RequestStatusType) =>
  ({
    type: 'APP/SET-STATUS',
    status,
  } as const);
export const setAppErrorAC = (error: string | null) =>
  ({
    type: 'APP/SET-ERROR',
    error,
  } as const);

export const setIsInitializedAC = () => ({ type: 'APP/SET-INITIALIZED' } as const);

export type SetAppStatusAC = ReturnType<typeof setAppStatusAC>;
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
type SetIsInitializedACType = ReturnType<typeof setIsInitializedAC>;
export type AppActionsType =
  | SetAppStatusAC
  | SetAppErrorActionType
  | SetIsInitializedACType;
