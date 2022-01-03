import React from 'react';
import { Link, withRouter } from "react-router-dom";


  export function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
          <div class="container">   
    <a class="navbar-brand text-light  " href="#">My Personal Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-light" id="navbarNav">
      <ul class="navbar-nav  ml-auto">
        <li class="nav-item ">
        <Link to="/" class="nav-link text-light">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link text-light">About</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link text-light">Contact</Link>
        </li>
   
      </ul>
    </div>
  </div>
         
      </nav>
        </div>
     
  
  );
}

export default Navigation;