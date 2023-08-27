import React from "react";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import Error from "./components/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:id" element={<CardDetail />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
