import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  function openMobileMenu() {
    setIsOpen(true);
  }
  function closeMobileMenu() {
    setIsOpen(false);
  }
  function closeMobileMenuOverlay() {
    closeMobileMenu()
  }

  return (
    <>
      <button className="burger-menu" onClick={openMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`mobile-section ${isOpen ? 'mobile-section_opened' : ''}`}
        onClick={closeMobileMenuOverlay}
      >
        <div
        className={`mobile-menu ${isOpen ? 'mobile-menu_opened' : ''}`}
        onClick={e => e.stopPropagation()}
        >
          <button
            className="mobile-menu__close-btn"
            onClick={closeMobileMenu}
          ></button>
          <Navigation closeMobileMenu={closeMobileMenu}/>
        </div>
      </div>
    </>
  );
}
