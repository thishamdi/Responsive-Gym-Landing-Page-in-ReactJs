// Header.jsx

import React, { useRef } from 'react';
import { useEffect } from 'react';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';

const nav_links = [
  {
    path: '#home',
    display: 'Home'
  },
  {
    path: '#schedule',
    display: 'Schedule'
  },
  {
    path: '#classes',
    display: 'Classes'
  },
  {
    path: '#pricing-plan',
    display: 'Pricing'
  },
];

const Header = () => {
  // ======= sticky nav ========
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav_wrapper">
          {/* ======= LOGO ====== */}
          <a href="../../public/index.html" className="logo-link">
            <div className="logo">
              <div className="logo_img">
                <img src={logo} alt="Fitbody Logo" />
              </div>
              <h2>Fitbody</h2>
            </div>
          </a>
          {/*======= Navigation menu ========*/}
          <nav className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li key={index} className="nav_item">
                  <a href={item.path} onClick={handleClick}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/*======== nav right =======*/}
          <div className="nav_right">
            <button className="register_btn">Register</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
