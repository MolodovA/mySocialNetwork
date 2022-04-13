import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import userAvatar from '../../assets/images/userAvatar.png';

import style from './FileUsers.module.scss';

import { userType } from 'redux/reducers';
import { getFollowingIsProgress } from 'redux/selectors/selectorsUsers/selectorsUsers';
import { followThunkCreater, unFollowThunkCreater } from 'redux/thunks';

type UserTypeProps = {
  user: userType;
};
export const User = ({ user }: UserTypeProps): any => {
  const followingIsProgress = useSelector(getFollowingIsProgress);
  const dispatch = useDispatch();

  return (
    <div key={user.id} className={style.userCardSize}>
      <div className={style.userCard}>
        <NavLink to={`/profile/${user.id}`}>
          <img
            className={style.avatar}
            src={user.photos ? userAvatar : user.photos}
            alt="UsersAvatar"
          />
        </NavLink>
        <NavLink to={`/profile/${user.id}`}>
          <div className={style.name}>{user.name}</div>
        </NavLink>

        <div className={style.id}>{user.id}</div>

        <div>
          {user.followed ? (
            <button
              className={style.btn}
              disabled={followingIsProgress.some(id => id === user.id)}
              onClick={() => {
                dispatch(unFollowThunkCreater(user.id));
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={style.btn}
              disabled={followingIsProgress.some(id => id === user.id)}
              onClick={() => {
                dispatch(followThunkCreater(user.id));
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
