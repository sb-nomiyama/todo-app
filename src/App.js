import React from 'react';
// 利用するUIコンポーネントをインポート
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
// ルーター関連コンポーネントのインポート
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import TBoard from './components/organisms/TBoard';
import LoginForm from './components/templates/LoginForm';
import Home from './components/pages/Home';

import { TaskCardsProvider } from './context/taskCardsHook';

const LoginButton = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  };

  return (
    <Button onClick={toLogin} color="inherit">
      <Icon>person</Icon>
      Login
    </Button>
  );
};

const App = () => (
  <TaskCardsProvider>
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <h1>TASK LIST</h1>
          <LoginButton />
        </Toolbar>
      </AppBar>
      <div>
        <Link to="/home">[Home]</Link>
        <Link to="/board">[Board]</Link>
      </div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/board" element={<TBoard />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </TaskCardsProvider>
);

export default App;
