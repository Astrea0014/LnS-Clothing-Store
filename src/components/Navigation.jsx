import '../App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from '../pages/Main.jsx';

export default function NavigationRouter() {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleIsOpen_OnClick = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
        <nav className='uniform-nav'>
          <div className='logo-header'>
            <a className='hamburger-button' onClick={ToggleIsOpen_OnClick}>
              <span></span>
              <span></span>
              <span></span>
            </a>

            <p className='logo'>L&S Clothing</p>
          </div>

          <div className={`menu-items ${isOpen ? 'open' : 'closed'}`}>
            <Link to='/' onClick={ToggleIsOpen_OnClick}>Home</Link>
            <Link to='/browse' onClick={ToggleIsOpen_OnClick}>Browse</Link>
            <Link to='/contact' onClick={ToggleIsOpen_OnClick}>Contact</Link>
          </div>
      </nav>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/browse'/>
        <Route path='/contact'/>
      </Routes>
    </BrowserRouter>
  );
}