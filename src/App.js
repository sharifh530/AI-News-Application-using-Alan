import React, { useEffect } from "react";
import "./App.css";

import alanBtn from "@alan-ai/alan-sdk-web";

const alankey = "";

function App() {
  useEffect(() => {
    alanBtn({
      key: alankey,
    });
  }, []);

  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
