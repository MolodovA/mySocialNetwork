import React from 'react';

import style from '../Dialogs.module.scss';

export type MessageItemPropsType = {
  id: string;
  avatar: string;
  message: string;
};
export const MessageItem = ({ id, message, avatar }: MessageItemPropsType): any => (
  <div className={style.messages__item}>
    <div className={style.messages__avatar}>{avatar}</div>
    <div className={style.messages__message}>{message}</div>
  </div>
);
