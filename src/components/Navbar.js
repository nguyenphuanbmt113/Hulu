import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useDarkMode } from "../hooks/useDarkMode";
export const Navbar = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const [stickyClass, setStickyClass] = useState(false);
  const { user, LogOut } = UserAuth();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await LogOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleCLick = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };
  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    if (windowHeight > 100) {
      setStickyClass(true);
    } else {
      setStickyClass(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <div
      className={
        stickyClass
          ? "flex items-center justify-between p-4 z-[100] w-full fixed bg-black/80"
          : "flex items-center justify-between p-4 z-[100] w-full absolute"
      }>
      <div className="flex items-center gap-4">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        <div
          className={`w-[55px] h-[30px] p-1 rounded-2xl bg-transparent border ${
            isDarkMode ? "bg-red-500" : null
          }`}
          onClick={toggleDarkMode}>
          <div
            className={`w-[20px] h-[20px] rounded-full bg-white ${
              isDarkMode ? "translate-x-6 " : null
            } `}></div>
        </div>
      </div>
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 md:w-[400px] w-[200px] bg-transparent border text-white"
        />
        <div
          className="absolute top-[50%] right-[0%] -translate-y-[50%] bg-red-400 py-[9px] px-5"
          onClick={handleCLick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 dark:text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-400">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-500">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
