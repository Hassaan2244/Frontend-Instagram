import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
