import React, { ChangeEvent, useState } from 'react';

import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import { useDispatch } from 'react-redux';

import user from '../../../assets/images/userAvatar.png';

import s from './ProfileInfo.module.scss';
import { ProfileDataForm } from './profileInfoForm/ProfileInfoForm';

import { ProfileInfoData } from 'components/Profile/ProfileInfo/profileInfoData/ProfileInfoData';
import { ProfileInfoType } from 'redux/reducers/profileReducer/types';
import { savePhotoTC } from 'redux/thunks/profileThunks/profileThunks';

type ProfileInfoPropsType = {
  profile: ProfileInfoType;
};
const firstElementArrayFiles = 0;
export const ProfileInfo = ({ profile }: ProfileInfoPropsType): any => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  if (!profile) {
    return <LinearProgress />;
  }

  const onUploadPhotoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      dispatch(savePhotoTC(e.target.files[firstElementArrayFiles]));
    }
  };
  return (
    <div className={s.info}>
      <div className={s.info__image}>
        <div className={s.info__icon}>
          <img src={profile.photos.large ? profile.photos.large : user} alt="" />
        </div>
        <div className={s.uploadPhotoItem}>
          <input type="file" className={s.uploadPhoto} />
          <div onChange={onUploadPhotoChange} className={s.uploadPhotoButton}>
            change photo
          </div>
        </div>
      </div>

      <div className={s.description}>
        {editMode ? (
          <ProfileDataForm profile={profile} setEditMode={setEditMode} />
        ) : (
          <ProfileInfoData profile={profile} setEditMode={setEditMode} />
        )}
      </div>
    </div>
  );
};
