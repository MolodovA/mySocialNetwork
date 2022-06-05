import { Dispatch } from 'redux';

import { newsAPI } from 'api/api';
import { setAppErrorAC, setAppStatusAC } from 'redux/reducers/appReducer/appAC';
import { getNewsAC } from 'redux/reducers/newsReducer/newsAC';

export const getNewsThunkCreater = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));

  try {
    const response = await newsAPI.getNews();
    dispatch(setAppStatusAC('succeeded'));
    dispatch(getNewsAC(response.data));
  } catch (err: any) {
    dispatch(setAppErrorAC(err.message));
  }
};
