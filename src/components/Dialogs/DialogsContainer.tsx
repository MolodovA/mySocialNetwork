import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Dialogs } from './Dialogs';

import { createNewMessageAC, DialogsPageType, sendMessageAC } from 'redux/reducers';
import { AppStateType } from 'redux/store/reduxStore';

type MapStateToProps = {
  dialogsPage: DialogsPageType;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  sendNewMessage: () => void;
  newMessageChange: (newMessageText: string) => void;
};
export type DialogsType = MapStateToProps & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
  dialogsPage: state.DialogsReducer,
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  sendNewMessage: () => {
    // dispatch(sendMessageAC());
  },
  newMessageChange: (newMessageText: string) => {
    // dispatch(createNewMessageAC(newMessageText));
  },
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
