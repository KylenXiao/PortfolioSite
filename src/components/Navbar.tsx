import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHamburger, FaTimes } from 'react-icons/fa';
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span className="toggle-icon">{isOpen ? <FaTimes /> : <FaHamburger />}</span>
      </div>
      
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="navbar-header">
          <h1 className="logo">Kylen Xiao</h1>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleNav}>Home</Link></li>
          <li><Link to="/software" onClick={toggleNav}>Software Engineering</Link></li>
          <li><Link to="/ml" onClick={toggleNav}>Machine Learning</Link></li>
          <li><Link to="/gamedev" onClick={toggleNav}>Game Dev</Link></li>
          <li><Link to="/art" onClick={toggleNav}>Art Gallery</Link></li>
          <li><Link to="/about" onClick={toggleNav}>About</Link></li>
        </ul>
      </nav>
      
      {isOpen && <div className="overlay" onClick={toggleNav}></div>}
    </>
  );
}

export default Navbar