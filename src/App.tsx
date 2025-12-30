import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Community from './pages/Community';
import Developers from './pages/Developers';
import Education from './pages/Education';
import Business from './pages/Business';
import Learn from './pages/Learn';
import Events from './pages/Events';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/education" element={<Education />} />
        <Route path="/business" element={<Business />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}
