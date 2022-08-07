import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardMovie } from "../components/CardMovie";
export const Search = () => {
  const { search } = useParams();
  const [sort, setSort] = useState();
  const [year, setYear] = useState("");
  const [region, setRegion] = useState("");
  const [changeUrl, setChangeUrl] = useState("");
  const [filter, setFilter] = useState(false);
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US&page=1&query=${search}`;
    const fetching = async () => {
      const res = await axios.get(url.concat(changeUrl));
      const data = res?.data.results;
      console.log("url.concat(changeUrl)", url.concat(changeUrl));
      setMovie(data);
    };
    fetching();
  }, [search, changeUrl]);
  useEffect(() => {
    setChangeUrl("");
    if (sort) {
      setChangeUrl(changeUrl.concat("&", sort));
    }
    if (year) {
      setChangeUrl(changeUrl.concat("&", year));
    }
    if (region) {
      setChangeUrl(changeUrl.concat("&", region));
    }
    setFilter(false);
  }, [filter]);
  return (
    <div className="px-4 pt-[100px]">
      <div className="mt-5 mb-10 flex items-start gap-5 flex-col md:items-center md:flex-row">
        <h5 className="text-white">Sort By</h5>
        <select
          className="form-select p-2"
          aria-label="Default select example"
          onChange={(e) => setSort(e.target.value)}>
          <option value="" selected>
            Open this select menu
          </option>
          <option value="title.asc">Movie Title A to Z</option>
          <option value="title.desc">Movie Title Z to A</option>
          <option value="popularity.asc">Increasing in Popularity</option>
          <option value="popularity.desc">Descending in Popularity</option>
          <option value="primary_release_date.asc">
            Increasing by Release Date
          </option>
          <option value="primary_release_date.desc">
            Descending by Release Date
          </option>
        </select>
        <select
          className="form-select p-2"
          aria-label="Default select example"
          onChange={(e) => setYear(e.target.value)}>
          <option value="" selected className="text-white">
            select Year
          </option>
          <option value="year=2018">2018</option>
          <option value="year=2019">2019</option>
          <option value="year=2020">2020</option>
          <option value="year=2021">2021</option>
          <option value="year=2022">2022</option>
        </select>
        <select
          className="form-select p-2"
          aria-label="Default select example"
          onChange={(e) => setRegion(e.target.value)}>
          <option value="" selected className="text-white">
            select Region
          </option>
          <option value="region=vn">Viet nam</option>
          <option value="region=japan">JaPan</option>
        </select>
        <button
          className="px-4 py-2 bg-red-500 text-white"
          onClick={() => setFilter(true)}>
          Filter
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
        {movies.length > 0 &&
          movies.map((item) => <CardMovie item={item}></CardMovie>)}
      </div>
    </div>
  );
};
