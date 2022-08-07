import React, { useEffect, useState } from "react";
import axios from "axios";

import { CardMovie } from "./CardMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      let res = await axios.get(fetchUrl);
      let data = res?.data?.results;
      setMovies(data);
    };
    fetching();
  }, [fetchUrl]);
  return (
    <div className="p-4 md:px-8">
      <h2 className="text-white font-bold md:text-xl mb-4 dark:text-black">
        {title}
      </h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 5,
          },
          1200: {
            width: 1200,
            slidesPerView: 5,
          },
          1280: {
            width: 1280,
            slidesPerView: 5,
          },
        }}>
        {movies.length > 0 &&
          movies.map((item) => (
            <>
              <SwiperSlide key={item.id}>
                <CardMovie item={item}></CardMovie>
              </SwiperSlide>
            </>
          ))}
      </Swiper>
    </div>
  );
};
