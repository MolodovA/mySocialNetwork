import { AppStateType } from 'redux/store/reduxStore';

export const getNews = (state: AppStateType): string => state.news.news;
