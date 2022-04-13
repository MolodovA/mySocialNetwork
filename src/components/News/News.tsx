import React, { useEffect, useState } from 'react';

import { Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import style from './News.module.scss';

import { getNews } from 'redux/selectors/selectorsNews/selectorsNews';
import { getNewsThunkCreater } from 'redux/thunks';

const defaultValueRating = 2.5;
export const News = (): any => {
  const [value, setValue] = useState<number | null>(defaultValueRating);
  const newNews = useSelector(getNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsThunkCreater());
  }, []);

  return (
    <div className={style.news}>
      <h2 className={style.title}>News</h2>
      {newNews}

      <div className={style.rating}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
};
