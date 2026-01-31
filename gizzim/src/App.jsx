import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ProgramsPage from './pages/Programs/Programs';
import TeamsPage from './pages/Teams/Teams';
import ContactPage from './pages/Contact/Contact';
import GalleryPage from './pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;