// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import GymDetailPage from './pages/GymDetailPage';
import GymPage from './pages/GymPage';
import HomePage from './pages/HomePage';
import MyDetailPage from './pages/MyDetailPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gyms" element={<GymPage />} />
      <Route path="/communities" element={<BoardPage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/my/communities" element={<MyDetailPage />} />
      <Route path="/gyms/:id" element={<GymDetailPage />} />
    </Routes>
  );
}

export default App;
