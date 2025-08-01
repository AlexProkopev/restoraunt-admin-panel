import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Page/ErrorPage.jsx';
import SwitchTheme from './components/SwitchTheme/SwitchTheme.jsx';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme, themeFromLocal } from './Themes/Themes.jsx';
import { useDispatch } from 'react-redux';
import { refreshThunk } from './redux/authentification/services.js';
import { ROUTES } from './routes/Routes.jsx';

function App() {
  const [isDark, setIsDark] = useState(themeFromLocal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark, dispatch]);

  const renderRoutes = (routes) =>
    routes.map(({ path, element, children, index }) => (
      <Route key={path || 'index'} path={path} element={element} index={index}>
        {children && renderRoutes(children)}
      </Route>
    ));

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <SwitchTheme isDark={isDark} setIsDark={setIsDark} />
      <Routes>
         {renderRoutes(ROUTES)}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
