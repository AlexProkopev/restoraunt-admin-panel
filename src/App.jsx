import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Page/ErrorPage.jsx';
import SwitchTheme from './components/SwitchTheme/SwitchTheme.jsx';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme, theemeFromLocal } from './Themes/Themes.jsx';
import { useDispatch } from 'react-redux';
import { refreshThunk } from './redux/authentification/services.js';
import { ROUTES } from './routes/Routes.jsx';

function App() {
  const [isDark, setIsDark] = useState(theemeFromLocal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark, dispatch]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <SwitchTheme isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        {ROUTES.map(({ path, element, children }) => {
          if (children) {
            return (
              <Route key={path} path={path} element={element}>
                {children.map(
                  ({ path: childPath, element: childElement, index }) => (
                    <Route
                      key={childPath || 'index'}
                      path={childPath}
                      index={index}
                      element={childElement}
                    />
                  )
                )}
              </Route>
            );
          }
          return <Route key={path} path={path} element={element} />;
        })}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
