import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import SearchParams from './SearchParams'
import Details from './Details';

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));