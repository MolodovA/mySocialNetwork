import React from 'react';

import { Link } from 'react-router-dom';

import style from '../Dialogs.module.scss';

export type DialogsItemPropsType = {
  id: string;
  name: string;
};
export const DialogsItem = ({ id, name }: DialogsItemPropsType): any => {
  const path = `/dialog/${id}`;
  return (
    <li className={style.dialogs__item}>
      <Link to={path}>{name}</Link>
    </li>
  );
};
