import * as React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Header() {
    return (
      <div className="Header w-100">
        <div class="container">
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <p><strong>Andrea Content Analyst</strong></p>
            </div>
            </nav>
        </div>
      </div>
    );
  }
  
  export default Header;