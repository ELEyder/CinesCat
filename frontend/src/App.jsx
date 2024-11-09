import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';

import './App.css';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/peliculas" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Login />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </Router>
  );
}

export default AppWrapper;
