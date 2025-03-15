// App.jsx
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [activeform, setactiveform] = useState('login');

  const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Check if the token exists
  };

  return (
    <Router>
      <Navbar setactiveform={setactiveform} />
      <Routes>
        <Route path="/login" element={<Login switchToSignup={() => setactiveform('signup')} />} />
        <Route path="/signup" element={<Signup switchToLogin={() => setactiveform('login')} />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;