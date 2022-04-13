import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from 'redux/reducers/appReducer/appReducer';
import { authReducer } from 'redux/reducers/authReducer/authReducer';
import { DialogsReducer } from 'redux/reducers/dialogsReducer/dialogsReducer';
import { newsReducer } from 'redux/reducers/newsReducer/newsReducer';
import { profileReducer } from 'redux/reducers/profileReducer/profileReducer';
import { findUsersReducer } from 'redux/reducers/usersReducer/findUsersReducer';

export const rootReducer = combineReducers({
  profileReducer,
  DialogsReducer,
  findUsersReducer,
  auth: authReducer,
  news: newsReducer,
  app: appReducer,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export type AppStateType = ReturnType<typeof rootReducer>;
