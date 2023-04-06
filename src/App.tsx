import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Podcasts from "./pages/Podcasts";
import FilmList from "./pages/FilmList";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="Podcasts"
              element={<Podcasts />}
            />
            <Route
              path="FilmList"
              element={<FilmList />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
