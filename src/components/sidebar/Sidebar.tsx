import { NavLink } from 'react-router-dom';

import s from './Sidebar.module.scss';

const Nav = (): any => (
  <nav className={s.nav}>
    <ul>
      <li className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? `${s.active}` : '')}
        >
          Profile
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? `${s.active}` : '')}
        >
          Messages
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/news" className={({ isActive }) => (isActive ? `${s.active}` : '')}>
          News
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? `${s.active}` : '')}
        >
          Music
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/setting"
          className={({ isActive }) => (isActive ? `${s.active}` : '')}
        >
          Settings
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? `${s.active}` : '')}
        >
          Users
        </NavLink>
      </li>
    </ul>
  </nav>
);
export const Sidebar = (): any => (
  <div>
    <Nav />
  </div>
);
