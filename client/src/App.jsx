import { Route, Routes } from 'react-router-dom';
import GymPage from './pages/GymPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gyms" element={<GymPage />} />
    </Routes>
  );
}

export default App;
