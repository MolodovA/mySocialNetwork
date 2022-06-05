import { FindUserActionsType } from 'redux/reducers/usersReducer/usersAC';

export type userType = {
  name: string;
  id: number;
  followed: boolean;
  status: string;
  uniqueUrlName: null;
  photos: {
    small: string;
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
};
export type initialStateType = {
  users: userType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingIsProgress: number[];
};
const initialState: initialStateType = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingIsProgress: [],
};

export const findUsersReducer = (
  state: initialStateType = initialState,
  action: FindUserActionsType,
): initialStateType => {
  switch (action.type) {
    case 'FIND-USER/FOLLOW':
      return {
        ...state,
        users: state.users.map(u =>
          u.id === action.payload.id
            ? {
                ...u,
                followed: true,
              }
            : u,
        ),
      };
    case 'FIND-USER/UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u =>
          u.id === action.payload.id
            ? {
                ...u,
                followed: false,
              }
            : u,
        ),
      };
    case 'FIND-USER/SET-USERS':
      return { ...state, users: action.payload.users };
    case 'FIND-USER/CURRENT-PAGE':
      return { ...state, currentPage: action.p };
    case 'FIND-USER/TOTAL-USERS-COUNT':
      return { ...state, totalUsersCount: action.payload.totalCount };
    case 'FIND-USER/TOOGLE-IS-FETCHING':
      return { ...state, isFetching: action.payload.isFetching };
    case 'FIND-USER/FOLLOW-IS-PROGRESS':
      return {
        ...state,
        followingIsProgress: action.payload.isFetching
          ? [...state.followingIsProgress, action.payload.id]
          : state.followingIsProgress.filter(f => f !== action.payload.id),
      };
    default:
      return state;
  }
};
