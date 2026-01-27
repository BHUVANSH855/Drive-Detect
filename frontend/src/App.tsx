import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;