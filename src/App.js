import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { AuthContextProvider } from "./context/AuthContext";
import { Login } from "./page/Login";
import { Signup } from "./page/Signup";
import { Account } from "./page/Account";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Navbar } from "./components/Navbar";
import { Search } from "./page/Search";
import { MovieDetailPage } from "./page/MovieDetailPage";
import { Genres } from "./page/Genres";
import { Footer } from "./page/Footer";
import { CollectionContextProvider } from "./context/CollectionContext";
import { CollectionPage } from "./page/CollectionPage";
function App() {
  return (
    <div className="min-h-screen dark:bg-white">
      <CollectionContextProvider>
        <AuthContextProvider>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route
              path="/collection"
              element={<CollectionPage></CollectionPage>}></Route>
            <Route path="/search/:query" element={<Search></Search>}></Route>
            <Route
              path="/movie/:id"
              element={<MovieDetailPage></MovieDetailPage>}></Route>
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account></Account>
                </ProtectedRoute>
              }></Route>
            <Route path="/genre/:genre" element={<Genres></Genres>}></Route>
          </Routes>
          <Footer></Footer>
        </AuthContextProvider>
      </CollectionContextProvider>
    </div>
  );
}

export default App;
