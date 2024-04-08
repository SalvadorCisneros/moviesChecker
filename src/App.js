import './App.css';
import Home from './pages/home/home';
import NavBar from './components/navBar/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/movieDetails/movieDetails';
import MovieSection from './pages/movieSection/movieSection';
import SeriesSection from './pages/seriesSection/seriesSection';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <div className='container_app'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:media/:id" element={<MovieDetails />} />
            <Route path="/movies" element={<MovieSection />} />
            <Route path="/series" element={<SeriesSection />} />
    
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;

