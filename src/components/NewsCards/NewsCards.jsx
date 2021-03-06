import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./style";

import NewsCard from "../NewsCard/NewsCard";

const infoCards = [
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#00838f",
    title: "Some important Commands",
    info: "For going back, For reading article",
    text: "Go back, Open article 1",
  },
];

function NewsCards({ articles, activeArticle }) {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              className={classes.infoCard}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6" className={classes.card__style}>
                    <strong>
                      <b className={classes.bold}>
                        {infoCard.title.split(" ")[2]}:
                      </b>{" "}
                      <br /> {infoCard.info}{" "}
                    </strong>{" "}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
}

export default NewsCards;
