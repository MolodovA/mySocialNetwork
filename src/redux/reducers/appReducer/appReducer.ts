import { AppActionsType } from './appAC';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

type AppInitialStateType = {
  status: RequestStatusType;
  error: null | string;
  isInitialized: boolean;
};
const appInitialState = {
  status: 'loading' as RequestStatusType,
  error: null,
  isInitialized: false,
};
export const appReducer = (
  state: AppInitialStateType = appInitialState,
  action: AppActionsType,
): AppInitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status };
    case 'APP/SET-ERROR':
      return { ...state, error: action.error };
    case 'APP/SET-INITIALIZED': {
      return { ...state, isInitialized: true };
    }
    default:
      return state;
  }
};
