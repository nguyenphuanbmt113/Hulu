import React from "react";
import {useNavigate} from "react-router-dom"
export const CardMovie = ({ item }) => {
  const navigate = useNavigate()
  return (
    <div className="relative w-full h-full" onClick={()=>navigate(`/movie/${item.id}`)}>
      <div className="w-full h-auto">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <p className="text-white mt-2">{item.title}</p>
      <div className="absolute top-[5%] left-[5%]">
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
      {/* <div className="absolute top-[5%] right-[5%] w-7 h-7 bg-yellow-400 rounded-3xl flex items-center justify-center">
        <p className="text-black text-sm">{item.vote_average}</p>
      </div> */}
    </div>
  );
};
