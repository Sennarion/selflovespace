import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/home/home';
import About from 'pages/about/about';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
