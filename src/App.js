import React from "react";
import Navbarr from "./components/Navbarr";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AnyPage from "./components/AnyPage";
import AnotherPage from "./components/AnotherPage";
function App() {
  return (
    <main className="main">
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anypage" element={<AnyPage />} />
        <Route path="/anotherpage" element={<AnotherPage />} />
      </Routes>
    </main>
  );
}

export default App;
