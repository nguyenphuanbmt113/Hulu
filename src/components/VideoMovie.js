import React from "react";
import useSWR from "swr";
import fetcher from "../config/fetcher";
export const VideoMovie = ({ id }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US`,
    fetcher
  );
  const dataVideo = data?.results || null;
  console.log("datavideo:", dataVideo);
  return (
    <div className="my-5">
      <h1 className="text-center font-bold my-5 text-3xl text-white dark:text-black">Trailer</h1>
      {dataVideo &&
        dataVideo.length > 0 &&
        dataVideo.slice(1, 2).map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.name}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        ))}
    </div>
  );
};
