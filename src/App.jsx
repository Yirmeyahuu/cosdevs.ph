import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/aboutPage';
import WorkPage from './pages/workPage';
import ServicesPage from './pages/servicesPage';
import ContactPage from './pages/contactPage';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-brandBlue-darkest min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;