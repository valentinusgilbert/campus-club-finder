import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ClubList from './pages/ClubList';
import ClubDetail from './pages/ClubDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<ClubList />} />
            <Route path="/clubs/:clubId" element={<ClubDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
