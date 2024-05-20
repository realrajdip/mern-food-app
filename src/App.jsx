import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Success from "./pages/Success.jsx";
import Error from './pages/Error.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
