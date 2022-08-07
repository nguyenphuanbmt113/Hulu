import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
export const Navbar = () => {
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

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 md:w-[400px] w-[200px] rounded-lg"
        />
        <div
          className="absolute top-[50%] right-[5%] -translate-y-[50%]"
          onClick={handleCLick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#333"
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
  // return (
  //   <div className="flex items-center justify-between p-4 z-[100] w-full absolute md:p-8">
  //     <Link to="/">
  //       <h2 className="text-red-500 text-4xl font-bold cursor-pointer">
  //         NETFLIX
  //       </h2>
  //     </Link>

  //     <div className="flex items-center gap-4">
  //       <Link to="/login">
  //         <button className="text-white">Sign In</button>
  //       </Link>
  //       <Link to="/signup">
  //         <button className="bg-red-500 px-6 py-2 rounded cursor-pointer text-white">
  //           Sign Up
  //         </button>
  //       </Link>
  //     </div>
  //   </div>
  // );
};
