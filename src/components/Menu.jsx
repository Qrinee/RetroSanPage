import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className={`menu-list ${isScrolled ? 'scrolled' : ''}`}>
      <li>
        <Link to="/" className='menu-button'>
          <span className="underline">start</span>
        </Link>
      </li>
      <li>
        <Link to="/menu" className='menu-button'>
          <span className="underline">menu</span>
        </Link>
      </li>
      <li>
        <Link to="/promocje" className='menu-button'>
          <span className="underline">promocje</span>
        </Link>
      </li>
      <li>
        <Link to="/kontakt" className='menu-button'>
          <span className="underline">kontakt</span>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
