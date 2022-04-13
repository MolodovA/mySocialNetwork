export const getNewsAC = (news: string) =>
  ({
    type: 'NEWS/GET-NEWS',
    news,
  } as const);
type getNewsACType = ReturnType<typeof getNewsAC>;

export type NewsActionsType = getNewsACType;
