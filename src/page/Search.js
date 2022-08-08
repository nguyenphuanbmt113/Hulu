import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { CardMovie } from "../components/CardMovie";
import { Pagination } from "../components/Pagination";
export const Search = () => {
  const { query } = useParams();
  const [sort, setSort] = useState();
  const [year, setYear] = useState("");
  const [region, setRegion] = useState("");
  const [changeUrl, setChangeUrl] = useState("");
  const [filter, setFilter] = useState(false);
  const [movies, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { search } = useLocation();
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US&page=1&query=${query}&page=${page}&limit=20`;
    const fetching = async () => {
      const res = await axios.get(url.concat(changeUrl));
      setTotalPages(res?.data?.total_pages);
      const data = res?.data.results;
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
  useEffect(() => {
    const page = new URLSearchParams(search).get("page") || 1;
    setPage(Number(page));
  }, [search]);
  return (
    <div className="px-4 pt-[100px]">
      <div className="mt-5 mb-10 flex items-start gap-5 flex-col md:items-center md:flex-row">
        <select
          className="form-select p-2 border border-black border-solid"
          aria-label="Default select example"
          onChange={(e) => setSort(e.target.value)}>
          <option value="" className="" selected>
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
          className="form-select p-2 border border-black border-solid"
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
          className="form-select p-2 border border-black border-solid"
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
      <Pagination page={page} totalPages={totalPages}></Pagination>
    </div>
  );
};
