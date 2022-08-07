import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
export const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    const fetching = async () => {
      let res = await axios.get(requests.requestPopular);
      let data = res?.data?.results;
      setMovies(data);
    };
    fetching();
  }, []);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[600px] text-white relative">
      <div className="overlay w-full h-full absolute inset-0 bg-gradient-to-r from-black z-1"></div>
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="content  absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
        <div className="flex items-center gap-4 my-4">
          <button className="border bg-gray-300 text-black px-5 py-2 border-gray-300">
            Play
          </button>
          <button className="border  px-5 py-2 border-gray-300 hover:bg-red-500 transition-all">
            Watch Now
          </button>
        </div>
        <p className="">Released: {movie?.release_date}</p>
        <p className="w-full md:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};
