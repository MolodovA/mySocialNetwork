import { Posts } from './MyPosts/Posts';
import style from './Profile.module.scss';
import { MapStatePropsType } from './ProfileContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = ({ profile }: MapStatePropsType): any => (
  <div className={style.profile}>
    <ProfileInfo profile={profile} />
    <Posts />
  </div>
);
