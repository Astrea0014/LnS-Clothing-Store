import '../App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from '../pages/Main.jsx';

export default function NavigationRouter() {
  return (
    <BrowserRouter>
        <nav className='uniform-nav'>
          <div className='logo-header'>
            <a className='hamburger-button'>
              <span></span>
              <span></span>
              <span></span>
            </a>

            <p className='logo'>L&S Clothing</p>
          </div>

          <div className='menu-items'>
            <Link to='/'>Home</Link>
            <Link to='/browse'>Browse</Link>
            <Link to='/contact'>Contact</Link>
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