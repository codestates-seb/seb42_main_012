import './theme.css';
import './quillCustom.css';
import { Route, Routes } from 'react-router-dom';
import PasswordEditPage from './pages/My/PasswordEdit';
import BoardDetailPage from './pages/Board/BoardDetail';
import BoardPage from './pages/Board/Board';
import BoardPostPage from './pages/Board/BoardPost';
import GymDetailPage from './pages/Gym/GymDetail';
import GymPage from './pages/Gym/Gym';
import GymReviewPage from './pages/Gym/GymReview';
import HomePage from './pages/Home/Home';
import MyDetailPage from './pages/My/MyDetail';
import MyPage from './pages/My/MyPage';
import AccountDeletePage from './pages/My/AccountDelete';
import GymPostPage from './pages/Gym/GymPost';
import SignUpPage from './pages/SignUp/SignUpPage';
import SignUpStep2 from './components/SignUp/SignUpStep2';
import LoginPage from './pages/Login/Login';
import BoardEditPage from './pages/Board/BoardEdit';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout hasNav />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<MainLayout hasHeader hasNav />}>
        <Route path="/gyms" element={<GymPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/my" element={<MyPage />} />
      </Route>

      <Route element={<MainLayout hasHeader hasNav />}>
        <Route path="/signup/step1" element={<SignUpPage />} />
        <Route path="/signup/step2" element={<SignUpStep2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gyms/:id" element={<GymDetailPage />} />
        <Route path="/gyms/gympost" element={<GymPostPage />} />
        <Route path="/gyms/gymedit" element={<GymPostPage />} />
        <Route path="/gyms/:id/reviews" element={<GymReviewPage />} />
        <Route path="/board/:id" element={<BoardDetailPage />} />
        <Route path="/board/boardpost" element={<BoardPostPage />} />
        <Route path="/board/boardedit" element={<BoardEditPage />} />
        <Route path="/my/board" element={<MyDetailPage />} />
        <Route path="/my/comments" element={<MyDetailPage />} />
        <Route path="/my/reviews" element={<MyDetailPage />} />
        <Route path="/my/bookmarks/board" element={<MyDetailPage />} />
        <Route path="/my/bookmarks/gyms" element={<MyDetailPage />} />
        <Route path="/my/info/password" element={<PasswordEditPage />} />
        <Route path="/my/info/accountDelete" element={<AccountDeletePage />} />
      </Route>
    </Routes>
  );
}

export default App;
