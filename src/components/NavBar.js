import React from 'react';

import './NavBar.css';

const NavBar = () => {
  return  (
  <nav className="NavBar">
    <div className="container">
      <a href="#">Home</a>
      <a href="#" className="active">Breakfast</a>
      <a href="#">Lunch</a>
      <a href="#">Dinner</a>
    </div>
  </nav>
  );
};

export default NavBar;