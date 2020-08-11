import React, { useEffect, useState } from "react";

import NewsCards from "./components/NewsCards/NewsCards.jsx";

import alanBtn from "@alan-ai/alan-sdk-web";
import useStyles from "./App.style";

const alanKey =
  "a6116ac63672c4b5499c04708cc5d4272e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newArticles, setNewArticles] = useState([]);

  const classes = useStyles();

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
      <div className={classes.logoContainer}>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newArticles} />
    </div>
  );
}

export default App;
