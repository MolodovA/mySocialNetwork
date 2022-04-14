import { AuthActionsType } from 'redux/reducers/authReducer/authAC';

export type AuthInitialStateType = {
  userId: string;
  email: string;
  login: string;
  isAuth: boolean;
};
const authInitialState = {
  userId: '',
  email: '',
  login: '',
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
