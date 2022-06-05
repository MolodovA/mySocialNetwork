import Button from '@mui/material/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import s from './Header.module.scss';

import { getISAuth } from 'redux/selectors/selectorsHeader/selectorsHeader';
import { logoutTC } from 'redux/thunks';

export const Header = (): any => {
  const isAuth = useSelector(getISAuth);
  const dispatch = useDispatch();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  const onLogoutButtonClick = (): any => {
    dispatch(logoutTC());
  };
  return (
    <div className={s.Header__row}>
      <div className={s.column}>
        <a href="/" className={s.logo}>
          <img
            src="https://www.muztorg.ru/files/5b9/hcy/nfz/vwo/gk0/g8w/w48/sk8/8/5b9hcynfzvwogk0g8ww48sk88.jpg"
            alt="logotip"
          />
        </a>
      </div>
      <div className={s.column}>
        <h1 className={s.Header__title}>Community</h1>
      </div>
      <div className={s.column}>
        <div className={s.login}>
          {isAuth ? (
            <Button variant="contained" onClick={onLogoutButtonClick}>
              logout
            </Button>
          ) : (
            'Sing In'
          )}
        </div>
      </div>
    </div>
  );
};
