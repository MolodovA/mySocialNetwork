import { memo } from 'react';

import { Avatar } from '@mui/material';

import style from './Post.module.scss';

export type PostPropsType = {
  id: string;
  message: string;
  avatar: string;
  like: number;
};

export const Post = memo(({ id, like, avatar, message }: PostPropsType): any => (
  <div className={style.post}>
    <div className={style.Item__block}>
      <div className={style.Item__icon}>
        <Avatar src={avatar} alt="avatar" />
      </div>
      <div className={style.Item__text}>{message}</div>
    </div>
    <div className={style.like}>like{like}</div>
  </div>
));
