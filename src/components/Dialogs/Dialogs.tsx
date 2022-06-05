import React, { ChangeEvent, FC } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import s from './Dialogs.module.scss';
import { DialogsItem } from './dialogsItem/DialogsItem';
import { MessageItem } from './messageItem/MessageItem';

import ItemAdd from 'components/common/itemAdd/ItemAdd';
import { Title } from 'components/common/title/Title';
import {
  createNewMessageAC,
  DialogsDataType,
  MessageDataType,
  sendMessageAC,
} from 'redux/reducers';

type DialogsType = {
  messageData: MessageDataType[];
  dialogsData: DialogsDataType[];
  isAuth: boolean;
};
export const Dialogs: FC<DialogsType> = ({
  messageData,
  dialogsData,
  isAuth,
}: DialogsType): any => {
  // data
  const dispatch = useDispatch();
  const newDialogsData = dialogsData.map(u => (
    <DialogsItem key={u.id} id={u.id} name={u.name} />
  ));
  const newMessageData = messageData.map(m => (
    <MessageItem key={m.id} id={m.id} message={m.message} avatar={m.avatar} />
  ));

  const onSendNewMessageClick = (): void => {
    dispatch(sendMessageAC());
  };
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const body = e.currentTarget.value;
    dispatch(createNewMessageAC(body));
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
