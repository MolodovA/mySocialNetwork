import React, { ReactElement, useEffect } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { withRouter } from './CustomWithPouter';

import { Profile } from 'components/Profile/Profile';
import { ProfileInfoType } from 'redux/reducers/profileReducer/types';
import { AppStateType } from 'redux/store/reduxStore';
import {
  getStatusTC,
  getUserProfileTC,
  savePhotoTC,
  updateStatusTC,
} from 'redux/thunks/profileThunks/profileThunks';

const defaulUserId = 22152;

export const ProfileContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const profile = useSelector<AppStateType, ProfileInfoType>(
    state => state.profileReducer.profileInfo,
  );

  const params = useParams();
  let { userId } = params;
  if (!userId) {
    userId = defaulUserId.toString();
  }

  useEffect(() => {
    dispatch(getUserProfileTC(Number(userId)));
    dispatch(getStatusTC(Number(userId)));
  }, []);

  return <Profile profile={profile} />;
};
