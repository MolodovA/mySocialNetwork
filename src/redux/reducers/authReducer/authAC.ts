export const setUserDataAC = (
  userId: string,
  email: string,
  login: string,
  isAuth: boolean,
) =>
  ({
    type: 'AUTH/SET-USER-DATA',
    payload: {
      userId,
      email,
      login,
      isAuth,
    },
  } as const);

type setUserDataACType = ReturnType<typeof setUserDataAC>;
export type AuthActionsType = setUserDataACType;
