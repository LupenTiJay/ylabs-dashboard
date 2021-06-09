import React, { useState } from "react";

import './App.css';
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip html={true}>{content}</ReactTooltip>
    </div>
  );
}

export default App;
