import { AuthActionsType } from 'redux/reducers/authReducer/authAC';

export type AuthInitialStateType = {
  userId: null | string;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
const authInitialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  state: AuthInitialStateType = authInitialState,
  action: AuthActionsType,
): AuthInitialStateType => {
  switch (action.type) {
    case 'AUTH/SET-USER-DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
