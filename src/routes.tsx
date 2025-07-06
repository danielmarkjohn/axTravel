// src/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MissionVision from './components/MissionVision';
import BlogHome from './components/Blog/BlogHome';
import AnimatedStats from './components/AnimatedStats';
import OurTeam from 'pages/OurTeam';
import Testimonials from 'pages/Testimonials';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mission-vision" element={<MissionVision />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/stats" element={<AnimatedStats />} />
      <Route path="/team" element={<OurTeam />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
};

export default AppRoutes;