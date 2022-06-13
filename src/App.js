import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.scss';

const App = () => (
  <>
    <header>
      <h1>TASK LIST</h1>
    </header>
    {/* <div>
      <Link to="/">[Home]</Link>
    </div> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;
