import { memo } from 'react';

import { Posts } from './MyPosts/Posts';
import style from './Profile.module.scss';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

import { ProfileInfoType } from 'redux/reducers/profileReducer/types';

type ProfileType = {
  profile: ProfileInfoType;
};
export const Profile = memo(({ profile }: ProfileType) => (
  <div className={style.profile}>
    <ProfileInfo profile={profile} />
    <Posts />
  </div>
));
