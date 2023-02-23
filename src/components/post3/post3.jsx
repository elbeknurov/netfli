import React, { useEffect, useState } from "react";
// import "../../components/popular/popular.css";
import "./post3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const BASE_URL = "https://www.omdbapi.com/?s=spiderman&apikey=cf40c1b";

const Post3 = () => {
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
    <div className="post container">
      <p className="post__item">Netflix Orijinal İçerikleri</p>
      <div className="post__film">
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
              <div className="post3__imsg">
                <img className="post3__img" src={elem.Poster} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Post3;
