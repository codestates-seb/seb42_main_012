// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PasswordEditPage from './pages/PasswordEditPage';
import BoardDetailPage from './pages/BoardDetailPage';
import BoardPage from './pages/BoardPage';
import BoardPostPage from './pages/BoardPostPage';
import GymDetailPage from './pages/GymDetailPage';
import GymPage from './pages/GymPage';
import GymReviewPage from './pages/GymReviewPage';
import HomePage from './pages/HomePage';
import MyDetailPage from './pages/MyDetailPage';
import MyPage from './pages/MyPage';
import AccountDeletePage from './pages/AccountDeletePage';
import GymPostPage from './pages/GymPostPage';
import SignUpPage from './pages/SignUpPage';
import SignUpStep2 from './components/SignUp/SignUpStep2';
import LoginPage from './pages/LoginPage';
// import Modal from './components/layouts/Modal/Modal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup/step1" element={<SignUpPage />} />
      <Route path="/signup/step2" element={<SignUpStep2 />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/gyms" element={<GymPage />} />
      <Route path="/gyms/:id" element={<GymDetailPage />} />
      <Route path="/gyms/gympost" element={<GymPostPage />} />
      <Route path="/gyms/:id/reviews/" element={<GymReviewPage />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/board/:id" element={<BoardDetailPage />} />
      <Route path="/board/boardpost" element={<BoardPostPage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/my/board" element={<MyDetailPage />} />
      <Route path="/my/comments" element={<MyDetailPage />} />
      <Route path="/my/reviews" element={<MyDetailPage />} />
      <Route path="/my/bookmarks/board" element={<MyDetailPage />} />
      <Route path="/my/bookmarks/gyms" element={<MyDetailPage />} />
      <Route path="/my/info/password" element={<PasswordEditPage />} />
      <Route path="/my/info/accountDelete" element={<AccountDeletePage />} />
    </Routes>
  );
}

export default App;
