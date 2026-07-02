import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MenuS from './components/Menu/MenuSection';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <MenuS />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/:lang" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/tr" replace />} />
      </Routes>
      <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}
