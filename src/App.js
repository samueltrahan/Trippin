import React, { useState } from "react";
import NavBar from "./components/NavBar";

import SearchLocationInput from "./components/SearchLocationInput";
import "./App.css";

const App = () => {
  const [cities, setCities] = useState([]);

  return (
    <>
      <NavBar />
      <SearchLocationInput />
    </>
  );
};

export default App;
