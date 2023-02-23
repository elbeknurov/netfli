import "./popular.css";
import MoviName from "../img/MovieName.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const BASE_URL = "https://www.omdbapi.com/?s=hulk&apikey=cf40c1b";

// import required modules
const Popular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((elem) => elem.json())
      .then((item) => {
        setData(item.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="popular">
      <div className="popular__wrapper container">
        <img className="popular__img" src={MoviName} alt="movie name" />
        <h6 className="popular__title">Türkiye’de Bugün 4 Numara</h6>
        <p className="popular__text">
          Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş
          dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir
          kızla karşılaşır ve hayatı değişir.
        </p>
        <div className="popular__btn">
          <a className="popular__play" href="/">
            Oynat
          </a>
          <a className="popular__aboutbtn" href="/">
            Daha Fazla Bilgi
          </a>
        </div>
        <div className="popular__films">
          <p className="popular__item">Netflix'te Popüler</p>
          <div className="popular__film">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {data.map((elem) => (
                <SwiperSlide>
                  <img src={elem.Poster} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
