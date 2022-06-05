import React, { FC } from 'react';

import style from './title.module.scss';

type TitleType = {
  title: string;
};
export const Title: FC<TitleType> = ({ title }: TitleType) => (
  <h2 className={style.title}>{title}</h2>
);
