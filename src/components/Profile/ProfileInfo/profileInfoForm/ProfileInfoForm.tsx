import React from 'react';

import Button from '@mui/material/Button/Button';
import { useDispatch } from 'react-redux';

import s from 'components/Profile/ProfileInfo/ProfileInfo.module.scss';
import { ProfileInfoType } from 'redux/reducers/profileReducer/types';

type ProfileDataFormType = {
  profile: ProfileInfoType;
  setEditMode: (value: boolean) => void;
};
export const ProfileDataForm = ({
  profile,
  setEditMode,
}: ProfileDataFormType | any): any => {
  const onGoToEditModeClick = (): void => {
    setEditMode(false);
  };
  return (
    <form>
      <ul>
        <li className={s.description__item}>Name: {profile.fullName}</li>
        <li className={s.description__item}>
          About me: {profile.aboutMe ? profile.aboutMe : 'I`m frontend developer'}
        </li>
        <li className={s.description__item}>
          GitHub:
          <input className={s.input} />
        </li>

        <li className={s.description__item}>
          lookingForAJob: <input className={s.input} />
        </li>
        <li className={s.description__item}>
          lookingForAJobDescription: <input className={s.input} />
        </li>
        <Button variant="contained" onClick={onGoToEditModeClick}>
          Save
        </Button>
      </ul>
    </form>
  );
};
