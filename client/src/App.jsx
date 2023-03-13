// import { Route, Routes } from 'react-router-dom';
// import MainLayout from './components/layouts/MainLayout';

import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import ErrorFallback from './components/ErrorFallback';
import Loading from './components/Loading';
import GymPage from './pages/GymPage';
import Header from './components/layouts/Header/Header';
import Main from './components/layouts/Main/Main';
import Nav from './components/layouts/Nav/Nav';

function App() {
  return (
    <div className="relative flex items-center justify-center">
      <ErrorBoundary fallback={ErrorFallback}>
        <Suspense fallback={Loading}>
          {<GymPage /> && <Header titleText="GYM" />}
          <Main>
            <GymPage />
          </Main>
          <Nav />
        </Suspense>
      </ErrorBoundary>
    </div>
    /* <Routes>
        <Route element={<MainLayout />}>
          <Route path="/gyms" element={<GymPage />} />
        </Route>
      </Routes> */
  );
}

export default App;
