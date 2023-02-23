import React, { useEffect, useState } from "react";
// import "../../components/popular/popular.css";
import "./izlemeye.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const BASE_URL = "https://www.omdbapi.com/?s=spiderman&apikey=cf40c1b";

const Izlemeye = () => {
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
      <p className="izlemeye__item">Netflix'te Popüler</p>
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

    // <div className="izlemeye container">
    //   <div className="izlemeye__wrapper">
    //     <p className="izlemeye__title">Kemal, İzlemeye Devam Et</p>
    //     <div className="izlemeye__films">
    //       <div className="izlemeye__film">
    //         <img src={MoviePost} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Izlemeye;
