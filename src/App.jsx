import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Culture from './pages/Culture/Culture';
import Food from './pages/Food/Food';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
