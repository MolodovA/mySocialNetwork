import React, { ChangeEvent, memo } from 'react';

import style from './itemAdd.module.scss';

type ItemAddType = {
  title: string;
  callbackChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  callbackAdd: () => void;
};
const ItemAdd = memo(({ title, callbackChange, value, callbackAdd }: ItemAddType) => (
  <div className={style.posts__items}>
    <div className={style.post__item}>
      <textarea
        value={value}
        className={style.textarea}
        onChange={e => callbackChange(e)}
      />
    </div>
    <div className={style.post__item}>
      <button onClick={callbackAdd} className={style.btn}>
        {title}
      </button>
    </div>
  </div>
));

export default ItemAdd;
