import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Login from './views/Login';
import Home from './views/Home';
import Movies from './views/Movies';
import Cinema from './views/Cinema';
import About from './views/About';
import Error from './views/Error';

import './App.css';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/peliculas" element={<Movies />} />
        <Route path="/cines" element={<Cinema />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

function AppWrapper() {
  const c1 = getComputedStyle(root).getPropertyValue('--color-p').trim();
  const c2 = getComputedStyle(root).getPropertyValue('--color-s').trim();

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            fontFamily: "KiddosyFreeRegular",
            fontWeightStrong: 200,
            titleFontSize: 22,
            colorPrimary: c1,
            controlHeight: 40,

          },
          Button: {
            colorPrimary: c1,
            colorPrimaryHover: c2,
            colorText: 'black'
          },
        },
      }}>
      <Router basename="/cinescat/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </Router>
    </ConfigProvider>

  );
}

export default AppWrapper;
