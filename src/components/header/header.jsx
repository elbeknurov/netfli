import React from "react";
import "./header.css";
import NetflixLogo from "../img/NetflixLogo.svg";
import search from "../img/search.svg";
import gif from "../img/gif.svg";
import signal from "../img/signal.svg";
import dropdown from "../img/Img&Dropdown.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <nav className="nav">
          <img src={NetflixLogo} alt="Netflix logo" />
          <ul className="header__list">
            <li className="header__item">Ana Sayfa</li>
            <li className="header__item">Diziler</li>
            <li className="header__item">Filmler</li>
            <li className="header__item">Yeni ve Popüler</li>
            <li className="header__item">Listem</li>
          </ul>
        </nav>
        <div className="header__div">
          <a className="header__title" href="/">
            <img src={search} alt="search" />
          </a>

          <a className="header__title" href="/">
            ÇOCUK
          </a>

          <a className="header__title" href="/">
            <img src={gif} alt="logo" />
          </a>
          <a className="header__title" href="/">
            <img src={signal} alt="logo" />
          </a>
          <a className="header__title" href="/">
            <img src={dropdown} alt="logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
