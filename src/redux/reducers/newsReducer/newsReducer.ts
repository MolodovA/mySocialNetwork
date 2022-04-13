import { NewsActionsType } from 'redux/reducers/newsReducer/newsAC';

export type NewsIinitialStateType = {
  news: string;
};
const newsInitialState = {
  news: '',
};

export const newsReducer = (
  state: NewsIinitialStateType = newsInitialState,
  action: NewsActionsType,
): NewsIinitialStateType => {
  switch (action.type) {
    case 'NEWS/GET-NEWS': {
      return { ...state, news: action.news };
    }
    default:
      return state;
  }
};
