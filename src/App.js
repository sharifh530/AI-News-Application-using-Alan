import React, { useEffect } from "react";
import "./App.css";

import alanBtn from "@alan-ai/alan-sdk-web";

const alankey =
  "a6116ac63672c4b5499c04708cc5d4272e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("this code was executed");
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
