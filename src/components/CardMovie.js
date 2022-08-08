import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Collection } from "../context/CollectionContext";
export const CardMovie = ({ item }) => {
  const imgRef = useRef();
  const { handleCollection } = Collection();
  const navigate = useNavigate();
  useEffect(() => {
    const img = imgRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        img.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original${item.backdrop_path}`
        );
      }
    });
    if (img) {
      observer.observe(img);
    }
    return () => {
      observer.unobserve(img);
    };
  }, [item.backdrop_path]);
  return (
    <div className="relative w-full h-full cursor-pointer group">
      <div
        className="w-full h-auto cursor-pointer relative"
        onClick={() => navigate(`/movie/${item.id}`)}>
        <img
          ref={imgRef}
          // src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.backdrop_path}
          className="w-full h-full object-cover rounded-md"
        />
        <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="absolute top-[5%] right-[5%] w-7 h-7 bg-yellow-400 rounded-3xl flex items-center justify-center">
            <p className="text-black text-sm">{item.vote_average}</p>
          </div>
        </div>
      </div>
      <p
        className="text-gray-400 mt-2 dark:text-black"
        onClick={() => navigate(`/movie/${item.id}`)}>
        {item.title}
      </p>
      <div
        className="absolute top-[5%] left-[5%] cursor-pointer"
        onClick={() => handleCollection(item)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
          strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </div>
    </div>
  );
};
