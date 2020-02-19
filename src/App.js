import React from 'react';
import Albums from './components/Albums';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Albums</a>
        </div>
      </nav>
      <div className="row">
        <Albums />
      </div>
    </div> 
  );
}

export default App;
