import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Casting } from "../components/Casting";
import { Row } from "../components/Row";
import requests from "../Requests";
export const MovieDetailPage = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  console.log("movie", movie.genres);
  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US`
      );
      const data = res?.data;
      setMovie(data);
    };
    fetching();
  }, [id]);
  return (
    <>
      <div className="w-full h-[700px] text-white relative">
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
      <div className="my-[50px] tags mb-10 flex items-center justify-center gap-x-5">
        {movie &&
          movie.genres &&
          movie.genres.map((item) => {
            return (
              <span
                className="px-4 py-2 rounded-xl border border-white bg-transparent text-white"
                key={item.id}
                onClick={() => navigate(`/genre/${item.id}`)}>
                {item.name}
              </span>
            );
          })}
      </div>
      <Casting id={id}></Casting>
      <Row title="Top Rated" fetchUrl={requests.requestTopRated}></Row>
      <Row title="Trending" fetchUrl={requests.requestTrending}></Row>
    </>
  );
};
