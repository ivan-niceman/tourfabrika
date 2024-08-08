import { HashLink } from 'react-router-hash-link';
import Navigation from '../Navigation/Navigation';
import SocialIcons from '../SocialIcons/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__menu">
          <HashLink smooth to="#header" className="logo">
          </HashLink>
          <Navigation />
          <div className='footer__numbers'>
            <p>город Екатеринбург</p>
            <a href='tel:+7965502415'>+7 965 502 41 95</a>
            <a href='tel:+79086308905'>+7 908 630 89 05</a>
          </div>
        </div>
        <div className="footer__info">
          <p>
            Положение об обработке персональных данных
            <br />
            Информация на сайте не является публичной офертой и носит
            исключительно информационный характер.
            <br />
            ИНН 665893718676 ОГРНИП 322665800213977
          </p>
          <SocialIcons />
        </div>
        <a href="https://nice-dev.ru/" className="nice-dev" target="_blank">
          © Nice Dev Web-Studio 2020 - {currentYear}
        </a>
      </div>
    </footer>
  );
}
