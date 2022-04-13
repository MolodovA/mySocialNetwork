export const setUserDataAC = (
  userId: string | null,
  email: string | null,
  login: string | null,
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
