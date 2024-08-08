import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import SocialIcons from "../SocialIcons/SocialIcons";
import MobileNav from "../MobileNav/MobileNav";
import logo from "../../images/logo.svg";

export default function Header() {
  const isHomePage = useLocation().pathname === "/";
  return (
    <header className="header" id='header'>
      <div className="container">
        <div className='header__menu'>
          <div className="header__info">
          <HashLink smooth to="/">
            <img src={logo} alt="логотип" className="logo" />
          </HashLink>
            <p className="header__text">Ваш&nbsp;надежный поставщик&nbsp;туруслуг</p>
          </div>
          <Navigation />
          <div className='header__action'>
            <SocialIcons />
            <HashLink smooth to={isHomePage ? "#form-section" : "/#form-section"} className='header__btn'>Подобрать&nbsp;тур</HashLink>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}