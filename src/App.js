import React, { useEffect, useState } from "react";
import "./App.css";
import NewsCards from "./components/NewsCards/NewsCards.jsx";

import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "a6116ac63672c4b5499c04708cc5d4272e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newArticles, setNewArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newArticles} />
    </div>
  );
}

export default App;
