import React, { lazy, Suspense, useEffect } from 'react';

import './App.css';
import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Preload } from './components/Preload/Preload';
import { Sidebar } from './components/Sidebar/Sidebar';

import ProfileContainer from 'components/Profile/ProfileContainer';
import { getIsInitialized, getStatusLoading } from 'redux/selectors';
import { getAuthUserData } from 'redux/thunks';

// Glinomes17/Bogamol
const Music = lazy(() =>
  // eslint-disable-next-line @typescript-eslint/no-shadow
  import('./components/Music/Music').then(({ Music }) => ({ default: Music })),
);

const DialogsContainer = lazy(() =>
  // eslint-disable-next-line @typescript-eslint/no-shadow
  import('./components/Dialogs/DialogsContainer').then(({ DialogsContainer }) => ({
    default: DialogsContainer,
  })),
);

const News = lazy(() =>
  // eslint-disable-next-line @typescript-eslint/no-shadow
  import('./components/News/News').then(({ News }) => ({ default: News })),
);

const Login = lazy(() =>
  // eslint-disable-next-line @typescript-eslint/no-shadow
  import('./components/Login/Login').then(({ Login }) => ({ default: Login })),
);
const Setting = lazy(() =>
  // eslint-disable-next-line @typescript-eslint/no-shadow
  import('./components/Setting/Setting').then(({ Setting }) => ({ default: Setting })),
);
const FindUsers = lazy(() =>
  // eslint-disable-next-line @typescript-eslint/no-shadow
  import('./components/FindUsers/FindUsers').then(({ FindUsers }) => ({
    default: FindUsers,
  })),
);

const App: React.FC = () => {
  const status = useSelector(getStatusLoading);
  const isInitialized = useSelector(getIsInitialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUserData());
  }, []);

  if (!isInitialized) {
    return <Preload />;
  }

  return (
    <div className="wrapper">
      <div className="page">
        <div className="container">
          <Header />
          {status === 'loading' && <LinearProgress />}
          <div className="page__container">
            <div className="page__column">
              <Sidebar />
            </div>
            <div className="page__column page__column-b">
              <Routes>
                <Route path="/profile" element={<ProfileContainer />}>
                  <Route path=":userId" element={<ProfileContainer />} />
                </Route>
                <Route
                  path="/dialogs"
                  element={
                    <Suspense
                      fallback={
                        <div>
                          <LinearProgress />
                        </div>
                      }
                    >
                      <DialogsContainer />
                    </Suspense>
                  }
                />
                <Route
                  path="/news"
                  element={
                    <Suspense
                      fallback={
                        <div>
                          <LinearProgress />
                        </div>
                      }
                    >
                      <News />
                    </Suspense>
                  }
                />
                <Route
                  path="/music"
                  element={
                    <Suspense
                      fallback={
                        <div>
                          <LinearProgress />
                        </div>
                      }
                    >
                      <Music />
                    </Suspense>
                  }
                />
                <Route
                  path="/setting"
                  element={
                    <Suspense
                      fallback={
                        <div>
                          <LinearProgress />
                        </div>
                      }
                    >
                      <Setting />
                    </Suspense>
                  }
                />
                <Route
                  path="/users"
                  element={
                    <Suspense
                      fallback={
                        <div>
                          <LinearProgress />
                        </div>
                      }
                    >
                      <FindUsers />
                    </Suspense>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <Suspense
                      fallback={
                        <div>
                          <LinearProgress />
                        </div>
                      }
                    >
                      <Login />
                    </Suspense>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
