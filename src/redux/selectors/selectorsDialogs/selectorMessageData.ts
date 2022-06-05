import { MessageDataType } from 'redux/reducers';
import { AppStateType } from 'redux/store/reduxStore';

export const selectMessageData = (state: AppStateType): MessageDataType[] =>
  state.DialogsReducer.messageData;
