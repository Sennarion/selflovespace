import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './shared-layout/shared-layout';
import Home from 'pages/home/home';
import About from 'pages/about/about';
import Services from 'pages/services/services';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
