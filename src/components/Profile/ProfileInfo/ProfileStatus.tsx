import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import s from './ProfileInfo.module.scss';

import { getStatus } from 'redux/selectors/selectorsProfile/selectorsProfile';
import { updateStatusTC } from 'redux/thunks/profileThunks/profileThunks';

export const ProfileStatus = (): any => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  const onActiveModeClick = (): void => {
    setEditMode(true);
  };
  const onStatusHandlerChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const statusCurrent = e.currentTarget.value;
    dispatch(updateStatusTC(statusCurrent));
  };
  const onBlurHandler = (): void => {
    setEditMode(false);
  };

  return (
    <div className={s.status}>
      {!editMode ? (
        <div>
          <span className={s.description__item}> Status:</span>
          <span onDoubleClick={onActiveModeClick}>{status || 'I`m free'}</span>
        </div>
      ) : (
        <div>
          <span className={s.description__item}> Status:</span>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <input onChange={onStatusHandlerChange} autoFocus onBlur={onBlurHandler} />
        </div>
      )}
    </div>
  );
};
