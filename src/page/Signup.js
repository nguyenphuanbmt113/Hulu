import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Signup = () => {
  const navigate = useNavigate();
  const { signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (e) {
      console.log("check err:", e);
    }
  };
  return (
    <div className="relative">
      <div className="overlay absolute w-full h-full inset-0 bg-black opacity-50"></div>
      <div className="w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="">
        <div className="max-w-[500px] w-full h-[500px] bg-black/70 mx-auto text-white p-10 rounded-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-center font-bold text-3xl mb-4">Sign Up</h1>
          <form
            action=""
            className="flex items-center flex-col gap-5"
            onSubmit={handleSubmit}>
            <div className="w-full">
              <label htmlFor="" className="mb-3 inline-block">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="px-4 py-2 w-full rounded-lg bg-transparent border"
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="mb-3 inline-block">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="px-4 py-2 w-full rounded-lg bg-transparent border"
              />
            </div>
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold w-full">
              Sign Up
            </button>
            <Link to="/login">
              <p className="text-white font-bold">Login</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
