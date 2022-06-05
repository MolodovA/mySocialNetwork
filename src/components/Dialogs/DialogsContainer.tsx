import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { Dialogs } from './Dialogs';

import { selectIsAuth } from 'redux/selectors/selectIsAuth';
import { selectDialogsData } from 'redux/selectors/selectorsDialogs/selectDialogsData';
import { selectMessageData } from 'redux/selectors/selectorsDialogs/selectorMessageData';

export const DialogsContainer: FC = () => {
  const dialogsData = useSelector(selectDialogsData);
  const messageData = useSelector(selectMessageData);
  const isAuth = useSelector(selectIsAuth);

  return <Dialogs dialogsData={dialogsData} messageData={messageData} isAuth={isAuth} />;
};
