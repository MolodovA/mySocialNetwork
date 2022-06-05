import { userType } from 'redux/reducers/usersReducer/findUsersReducer';

export const followed = (id: number) =>
  ({
    type: 'FIND-USER/FOLLOW',
    payload: { id },
  } as const);

export const followProgress = (isFetching: boolean, id: number) =>
  ({
    type: 'FIND-USER/FOLLOW-IS-PROGRESS',
    payload: { isFetching, id },
  } as const);

export const unfollowed = (id: number) =>
  ({
    type: 'FIND-USER/UNFOLLOW',
    payload: { id },
  } as const);

export const setUsers = (users: userType[]) =>
  ({
    type: 'FIND-USER/SET-USERS',
    payload: { users },
  } as const);

export const setCurrentPage = (p: number) =>
  ({
    type: 'FIND-USER/CURRENT-PAGE',
    p,
  } as const);

export const setTotalUserCount = (totalCount: number) =>
  ({
    type: 'FIND-USER/TOTAL-USERS-COUNT',
    payload: {
      totalCount,
    },
  } as const);

export const toogleIsFetching = (isFetching: boolean) =>
  ({
    type: 'FIND-USER/TOOGLE-IS-FETCHING',
    payload: {
      isFetching,
    },
  } as const);

type toogleIsFetchingType = ReturnType<typeof toogleIsFetching>;
type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>;
type currentPageACType = ReturnType<typeof setCurrentPage>;
type usersACType = ReturnType<typeof setUsers>;
type unfollowACType = ReturnType<typeof unfollowed>;
type followProgressACType = ReturnType<typeof followProgress>;
type followACType = ReturnType<typeof followed>;

export type FindUserActionsType =
  | followProgressACType
  | toogleIsFetchingType
  | followACType
  | unfollowACType
  | usersACType
  | currentPageACType
  | setTotalUserCountACType;
