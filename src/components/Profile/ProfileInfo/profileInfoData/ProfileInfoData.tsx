import React from 'react';

import Button from '@mui/material/Button/Button';

import { MapStatePropsType } from 'components/Profile/ProfileContainer';
import s from 'components/Profile/ProfileInfo/ProfileInfo.module.scss';
import { ProfileStatus } from 'components/Profile/ProfileInfo/ProfileStatus';

export const ProfileInfoData = ({
  profile,
  setEditMode,
}: MapStatePropsType | any): any => {
  const onGoToEditModeClick = (): void => {
    setEditMode(true);
  };
  return (
    <ul>
      <li className={s.description__item}>Name: {profile.fullName}</li>
      <ProfileStatus />
      <li className={s.description__item}>
        About me: {profile.aboutMe ? profile.aboutMe : 'I`m frontend developer'}
      </li>
      <li className={s.description__item}>
        GitHub:{' '}
        <a href="/">
          {profile.contacts.github ? profile.contacts.github : 'https://github.com'}
        </a>
      </li>
      <li className={s.description__item}>
        lookingForAJob: {profile.lookingForAJob ? 'Yes' : 'no'}
      </li>
      <li className={s.description__item}>
        lookingForAJobDescription:{' '}
        {profile.lookingForAJobDescription
          ? profile.lookingForAJobDescription
          : 'frontend developer'}
      </li>
      <Button variant="contained" onClick={onGoToEditModeClick}>
        Edit
      </Button>
    </ul>
  );
};
