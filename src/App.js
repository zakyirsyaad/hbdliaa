import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import './App.css'
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/loveyou' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
