import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import { Contact } from './pages/Contact';
import { Newsletter } from './pages/Newsletter';
import InfrastructureConsulting from './pages/services/InfrastructureConsulting';
import TransitionIntoDevOps from './pages/services/TransitionIntoDevOps';
import DevOpsCareerAccelerator from './pages/services/DevOpsCareerAccelerator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/services/infrastructure" element={<InfrastructureConsulting />} />
            <Route path="/services/transition-into-devops" element={<TransitionIntoDevOps />} />
            <Route path="/services/career-accelerator" element={<DevOpsCareerAccelerator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
