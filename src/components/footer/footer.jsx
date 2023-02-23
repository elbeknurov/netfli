import React from "react";
import "./footer.css";
import facebook from "../img/Facebook.svg";
import instagram from "../img/instagram.svg";
import twiiter from "../img/twitter.svg";
import youtube from "../img/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper container">
        <div className="footer__links">
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={twiiter} alt="twiiter" />
          </a>
          <a href="/">
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <div className="footer__top">
          <div className="footer__first">
            <p className="footer__item">
              <a className="footer__item" href="/">
                Seslendirme ve Alt Yazı
              </a>
            </p>
            <p className="footer__item">
              <a className="footer__item" href="/">
                Medya Merkezi
              </a>
            </p>
            <p className="footer__item">
              <a className="footer__item" href="/">
                Gizlilik
              </a>
            </p>
          </div>
          <div className="footer__second">
            <p className="footer__item">
              <a className="footer__item" href="/">
                Sesli Betimleme
              </a>
            </p>
            <p className="footer__item">
              <a className="footer__item" href="/">
                Yatırımcı İlişkileri
              </a>
            </p>
            <p className="footer__item">
              <a className="footer__item" href="/">
                Yasal Hükümler
              </a>
            </p>
          </div>
          <div className="footer__second">
            <p className="footer__item">
              <a className="footer__item" href="/">
                Yardım Merkezi
              </a>
            </p>
            <p className="footer__item">
              <a className="footer__item" href="/">
                İş İmkanları
              </a>
            </p>
            <p className="footer__item">
              <a className="footer__item" href="/">
                Çerez Tercihleri
              </a>
            </p>
          </div>
          <div className="footer__second">
            <p className="footer__item">
              <a className="footer__item" href="/">
                Hediye Kartları
              </a>
            </p>
            <p className="footer__item">
              <a className="footer__item" href="/">
                Kullanım Koşulları
              </a>
            </p>
            <p className="footer__item">
              <a className="footer__item" href="/">
                Kurumsal Bilgiler
              </a>
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <a className="footer__btn" href="/">
            Hizmet Kodu
          </a>

          <p className="footer__text">
            <a className="footer__text" href="/">
              © 1997-2021 Netflix, Inc.{"i-062d573a0ee099242"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
