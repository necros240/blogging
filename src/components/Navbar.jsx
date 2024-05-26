
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isDashboardVisible, setIsDashboardVisible] = React.useState(false);

  const toggleDashboard = () => {
    setIsDashboardVisible(!isDashboardVisible);
  };

  return (
    <nav className="navbar">
      <h1>Blog App</h1>
      <button onClick={toggleDashboard}>
        {isDashboardVisible ? 'Hide Dashboard' : 'Show Dashboard'}
      </button>
      <div className="nav-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        {isDashboardVisible && <Link to="/dashboard">Dashboard</Link>}
      </div>
    </nav>
  );
};

export default NavBar;
