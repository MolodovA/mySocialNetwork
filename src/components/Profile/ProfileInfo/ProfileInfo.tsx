import React, { ChangeEvent, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

// @ts-ignore
import camera from '../../../assets/images/camera.svg';
// @ts-ignore
import user from '../../../assets/images/user.svg';

import s from './ProfileInfo.module.scss';
import { ProfileDataForm } from './profileInfoForm/ProfileInfoForm';

import { ProfileInfoData } from 'components/Profile/ProfileInfo/profileInfoData/ProfileInfoData';
import { ProfileInfoType } from 'redux/reducers/profileReducer/types';
import { savePhotoTC } from 'redux/thunks/profileThunks/profileThunks';

type ProfileInfoPropsType = {
  profile: ProfileInfoType;
};
const firstElementArrayFiles = 0;

const Input = styled('input')({
  display: 'none',
});

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
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              onChange={onUploadPhotoChange}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={camera} alt="camera" />
            </IconButton>
          </label>
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
