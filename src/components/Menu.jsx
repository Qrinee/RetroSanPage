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
        <Link to="/test" className='menu-button'>
          <span className="underline">start</span>
        </Link>
      </li>
      <li>
        <Link to="/test/menu" className='menu-button'>
          <span className="underline">menu</span>
        </Link>
      </li>
      <li>
        <Link to="/test/promocje" className='menu-button'>
          <span className="underline">promocje</span>
        </Link>
      </li>
      <li>
        <Link to="/test/kontakt" className='menu-button'>
          <span className="underline">kontakt</span>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
