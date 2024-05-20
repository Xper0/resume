import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';

export default function RouterWrapper() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  );
}
