export const createNewMessageAC = (newMessageText: string) =>
  ({
    type: 'Dialogs/CREATE_NEW_MESSAGE',
    payload: {
      newText: newMessageText,
    },
  } as const);

export const sendMessageAC = () => ({ type: 'Dialogs/SEND_MESSAGE' } as const);

type sendMessageACType = ReturnType<typeof sendMessageAC>;
type createNewMessageACType = ReturnType<typeof createNewMessageAC>;

export type DialogsActionsType = sendMessageACType | createNewMessageACType;
