import React, { useEffect, useState } from "react";

import NewsCards from "./components/NewsCards/NewsCards.jsx";

import wordsToNumbers from "words-to-numbers";

import alanBtn from "@alan-ai/alan-sdk-web";
import useStyles from "./App.style";

const alanKey =
  "a6116ac63672c4b5499c04708cc5d4272e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newArticles, setNewArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try again");
          } else if (article) {
            window.open(article.url, "_black");
            alanBtn().playText("Opening...");
          }
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
      <NewsCards articles={newArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
