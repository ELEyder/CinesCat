import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './Components/Header/Header';

import './App.css';

function App() {
  const location = useLocation();
  return (
    <>
      {/* Condicional para no mostrar el Header en la ruta /login */}
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/peliculas" element={<Login />} />
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
