import { v1 } from 'uuid';

import { DialogsActionsType } from 'redux/reducers/dialogsReducer/dialogsAC';

export type MessageDataType = {
  id: string;
  message: string;
  avatar: string;
};
export type DialogsDataType = {
  id: string;
  name: string;
};

export type DialogsPageType = {
  messageData: MessageDataType[];
  dialogsData: DialogsDataType[];
  newMessageText: string;
};
const initialState: DialogsPageType = {
  messageData: [
    { id: v1(), message: 'Hi', avatar: 'ava' },
    { id: v1(), message: 'Hey', avatar: 'ava' },
    { id: v1(), message: 'Huck', avatar: 'ava' },
    { id: v1(), message: 'Huck', avatar: 'ava' },
    { id: v1(), message: 'zhazha', avatar: 'ava' },
  ],
  dialogsData: [
    { id: v1(), name: 'Andrey' },
    { id: v1(), name: 'Stacy' },
    { id: v1(), name: 'Gena' },
    { id: v1(), name: 'Victor' },
    { id: v1(), name: 'Alex' },
  ],
  newMessageText: '',
};

export const DialogsReducer = (
  state: DialogsPageType = initialState,
  action: DialogsActionsType,
): DialogsPageType => {
  switch (action.type) {
    case 'Dialogs/CREATE_NEW_MESSAGE':
      return { ...state, newMessageText: action.payload.newText };

    case 'Dialogs/SEND_MESSAGE':
      // eslint-disable-next-line no-case-declarations
      const { newMessageText } = state;
      return {
        ...state,
        newMessageText: '',
        messageData: [
          ...state.messageData,
          { id: v1(), avatar: 'ava', message: newMessageText },
        ],
      };
    default:
      return state;
  }
};
