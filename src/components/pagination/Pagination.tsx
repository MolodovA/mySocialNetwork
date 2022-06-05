import React, { FC, useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import style from './pagination.module.scss';

import { getData, getPageSize, getTotalUsersCount } from 'redux/selectors';
import { getUsersThunkCreater } from 'redux/thunks';

const defaultValuePortionNumber = 1;
export const Pagination: FC = () => {
  const data = useSelector(getData);
  const dispatch = useDispatch();
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const totalPagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPagesCount; i++) {
    pages.push(i);
  }
  const portionSize = 11;

  const portionCount = Math.ceil(totalPagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(defaultValuePortionNumber);
  const leftPortionPageNumber =
    (portionNumber - defaultValuePortionNumber) * portionSize + defaultValuePortionNumber;
  const rigthPortionPageNumber = portionNumber * portionSize;

  const onPageChandler = (p: number): void => {
    dispatch(getUsersThunkCreater(p, data.pageSize));
  };
  useEffect(() => {
    dispatch(getUsersThunkCreater(data.currentPage, data.pageSize));
  }, []);

  return (
    <div className={style.pagination}>
      {portionNumber > defaultValuePortionNumber && (
        <Button
          variant="contained"
          onClick={() => {
            setPortionNumber(portionNumber - defaultValuePortionNumber);
          }}
        >
          Prev
        </Button>
      )}
      {pages
        .filter(p => p > leftPortionPageNumber && p < rigthPortionPageNumber)
        .map(p => (
          <button
            key={p}
            className={data.currentPage === p ? style.currentPage : style.page}
            onClick={() => onPageChandler(p)}
          >
            {p}
          </button>
        ))}

      {portionCount > portionNumber && (
        <Button
          variant="contained"
          onClick={() => {
            setPortionNumber(portionNumber + defaultValuePortionNumber);
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default Pagination;
