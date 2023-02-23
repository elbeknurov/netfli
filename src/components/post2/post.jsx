import React, { useEffect, useState } from "react";
// import "../../components/popular/popular.css";
import "../../components/popular/popular.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const BASE_URL = "https://www.omdbapi.com/?s=spiderman&apikey=cf40c1b";

const Post = () => {
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
    <div className="izlemeye container">
      <p className="izlemeye__item">Gündemdekiler</p>
      <div className="izlemeye__film">
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
  );
};

export default Post;
