// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GymPage from './pages/GymPage';
import HomePage from './pages/HomePage';
import MyDetailPage from './pages/MyDetailPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gyms" element={<GymPage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/my/communities" element={<MyDetailPage />} />
    </Routes>
  );
}

export default App;
