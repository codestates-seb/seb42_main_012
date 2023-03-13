import { Route, Routes } from 'react-router-dom';
import GymPage from './pages/GymPage';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <div className="relative flex items-center justify-center">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/gyms" element={<GymPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
