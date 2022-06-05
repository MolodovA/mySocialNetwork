import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './FileUsers.module.scss';
import { User } from './User';

import Pagination from 'components/pagination/Pagination';
import { getData } from 'redux/selectors/selectorsUsers/selectorsUsers';

export const FindUsers = (): any => {
  const { users } = useSelector(getData);

  return (
    <div className={style.users}>
      <Pagination />

      <div className={style.usersItem}>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
