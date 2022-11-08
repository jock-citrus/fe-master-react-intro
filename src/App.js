import React, { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import SearchParams from './SearchParams'
import Details from './Details';
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));