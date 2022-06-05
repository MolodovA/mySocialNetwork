import { DialogsDataType } from 'redux/reducers';
import { AppStateType } from 'redux/store/reduxStore';

export const selectDialogsData = (state: AppStateType): DialogsDataType[] =>
  state.DialogsReducer.dialogsData;
