import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  const userName = "Adish U";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage name = {userName} /> }  />
      </Routes>
    </Router>
  );
}

export default App;