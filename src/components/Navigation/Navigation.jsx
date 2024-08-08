import { HashLink } from 'react-router-hash-link';

// eslint-disable-next-line react/prop-types
export default function Navigation({ closeMobileMenu }) {
  return (
    <nav className="navigation">
      <HashLink smooth to="/#widget" className='navigation__link' onClick={closeMobileMenu}>Поиск&nbsp;тура</HashLink>
      <HashLink smooth to="/#visas"className='navigation__link' onClick={closeMobileMenu}>Визы</HashLink>
      <HashLink smooth to="/#insurances"className='navigation__link' onClick={closeMobileMenu}>Страховки</HashLink>
      <HashLink smooth to="/#about" className='navigation__link' onClick={closeMobileMenu}>О&nbsp;компании</HashLink>
      <HashLink smooth to="/#form-section" className='navigation__link' onClick={closeMobileMenu}>Подобрать&nbsp;тур</HashLink>
    </nav>
  )
}
