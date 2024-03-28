import './App.css';
import Home from './pages/home/home';
import NavBar from './components/navBar/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/movieDetails/movieDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:media/:id" element={<MovieDetails />} />
          {/* Añade más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

