import React, { ChangeEvent } from 'react';

import { Navigate } from 'react-router-dom';

import s from './Dialogs.module.scss';
import { DialogsType } from './DialogsContainer';
import { DialogsItem } from './dialogsItem/DialogsItem';
import { MessageItem } from './messageItem/MessageItem';

import ItemAdd from 'components/common/itemAdd/ItemAdd';
import { Title } from 'components/common/title/Title';

export const Dialogs = ({
  dialogsPage,
  newMessageChange,
  sendNewMessage,
  isAuth,
}: DialogsType): any => {
  // data
  const newDialogsData = dialogsPage.dialogsData.map(u => (
    <DialogsItem key={u.id} id={u.id} name={u.name} />
  ));
  const newMessageData = dialogsPage.messageData.map(m => (
    <MessageItem key={m.id} id={m.id} message={m.message} avatar={m.avatar} />
  ));
  const newMessageBody = dialogsPage.newMessageText;

  const onSendNewMessageClick = (): void => {
    sendNewMessage();
  };
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const body = e.currentTarget.value;
    newMessageChange(body);
  };

  if (!isAuth) return <Navigate replace to="/Login" />;
  // ui
  return (
    <div className={s.dialogs}>
      <Title title="Dialogs" />
      <div className={s.dialogs__row}>
        <div className={s.dialogs__column}>
          <ul className={s.dialogs__list}>{newDialogsData}</ul>
        </div>
        <div className={`${s.dialogs__column} ${s.dialogs__column_b}`}>
          <div className={s.messages}>
            <div className={s.messages__items}>
              <div>{newMessageData}</div>
              <ItemAdd
                title=" Send"
                callbackChange={onNewMessageChange}
                callbackAdd={onSendNewMessageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
