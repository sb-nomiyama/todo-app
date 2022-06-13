import React from 'react';
// 利用するUIコンポーネントをインポート
import Toolbar from '@mui/material/Toolbar';
// ルーター関連コンポーネントのインポート
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';

const App = () => (
  <>
    <header>
      <Toolbar>
        <h1>TASK LIST</h1>
      </Toolbar>
    </header>
    {/* <div>
      <Link to="/">[Home]</Link>
    </div> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
  </>
);

export default App;
